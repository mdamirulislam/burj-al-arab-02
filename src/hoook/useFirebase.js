import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";

import { useEffect, useState } from 'react';
import initializeFirebase from "../Firebase/firebase.init";

const useFirebase =()=>{
    initializeFirebase();
    const [user,setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
//  google log in system 
    const usingGoogleSignIn =()=>{
    return signInWithPopup(auth, googleProvider)
 
    }
//  google logOut system 
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

// user observer system 
useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
        }
    })
},[])
return{
    user,
    usingGoogleSignIn,
    logOut
}
}

export default useFirebase;
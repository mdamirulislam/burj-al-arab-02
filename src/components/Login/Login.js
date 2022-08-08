import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../hoook/useFirebase';
import './Login.css'

const Login = () => {
  const {usingGoogleSignIn} = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/' ;

  const googleSignIn =()=>{
    usingGoogleSignIn()
    .then(result =>{
      history.push(redirect_uri)
    })
  }

    return (
      <div className='login-box'>
          <div > 
          <h1>This is Login</h1>

            <button className='login-btn' onClick={googleSignIn} >Google Sign In</button>
        </div>
      </div>
    );
};

export default Login;
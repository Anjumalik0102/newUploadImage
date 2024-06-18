
import React, { useState,useRef } from 'react';
import '../App.css';
const Anjuform = () => {
  const [isSignUp, setIsSignUp] = useState(false);

 
  const handleSignUpClick = () => {
    setIsSignUp(false);
  };

  const handleSignInClick = () => {
    setIsSignUp(true);
  };
  return (
    <div className="App">
      <div className= "container" >
        {isSignUp ?
            <div className='mainDiv' >
              <div className='rightDiv'  >
                <div className='form'>
                  <h1>Sign in</h1>
                  <label className='label' > Name </label>

                  <input
                    className='field'
                    type="text"
                    placeholder='Enter your name'
                    name='name'
                  />
                  <label className='label' >Password </label>

                  <input
                    className='field'
                    type="password"
                    placeholder='Enter your password'
                    name='password'
                  />
                  <button className="button">Sign In</button>
                </div>
              </div>
              <div className='leftDiv'>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="button" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          : 
            <div className='mainDiv'>
              <div className='rightDiv'>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="button" id="button" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className='leftDiv'>
                <div className='form'>
                  <h1>Create Account</h1>
                  <label className='label' > Name </label>

                  <input
                    className='field'
                    type="text"
                    placeholder='Enter your name'
                    name='name'
                  />

                  <label className='label' >Email </label>
                  <input
                    className='field'
                    type="email"
                    placeholder='Enter your email'
                    name='email'
                  />
                  <label className='label' >Password </label>

                  <input
                    className='field'
                    type="password"
                    placeholder='Enter your password'
                    name='password'
                  />
                  <button className="button">Sign Up</button>
                </div>
              </div>

            </div>

        }

      </div>

    </div>
  )
}
export default Anjuform;
import React from 'react';

function LoginSignUp(){
    return(
        <div className='login-signup-div text-centered'>
            <p>Please log in to start talking about the weather. Don't have an account? Sign up.</p>
            <ul className='sign-log-in-buttons-list  text-centered'>
                <li><button id='login-button'>Log In</button></li>
                <li><button id='signup-button'>Sign Up</button></li>
            </ul>
            
        </div>
    )
};

export default LoginSignUp

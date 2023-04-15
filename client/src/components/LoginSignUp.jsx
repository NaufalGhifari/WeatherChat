import React from 'react';

function LoginSignUp(){
    return(
        <div className=' text-centered'>
            <p>Please log in to start talking about the weather. Don't have an account? Sign up.</p>
            <ul className='sign-log-in-buttons-list  text-centered'>
                <li><button>Log In</button></li>
                <li><button>Sign Up</button></li>
            </ul>
            
        </div>
    )
};

export default LoginSignUp

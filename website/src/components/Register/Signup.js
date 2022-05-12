import React from 'react';
import './Signup.css';

export function Signup(){
    return(

            <div className="container">
                <h2>Register</h2>
    
                <form >
                <div className='text'>
                    <label>Username</label>
                    <input type="text" placeholder="Enter name"/>
                </div><br></br>
                <div className='text'>
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter Email"/>
                </div><br></br>
                <div className='text'>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password"/>
                </div><br></br>
                <div className='button'>
                        <button type="submit" className="row">Register</button>
                </div>
                </form>
    
                <p className='ptxt'>Already have an account? <a href="./Login.js">Login</a></p>
            </div>
        
    );
}

export default Signup;
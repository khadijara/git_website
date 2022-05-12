import React from 'react';
import './Login.css';
import Button from '../../components/Button/Button'
//import {Link} from 'react-router-dom';
export function Login(){
    return(
        <>
            
            <div className='container'>
                <h1>Login</h1>
            <form>
                <div className='text'>
                    <label>Email Adress</label>
                    <input type="text" placeholder="Enter Email"/>
                </div><br></br>
                <div className='text'>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password"/>
                </div><br></br>
                <div className='button'>
                    <Button> Login </Button>
                    
                </div>
                <a href="#">Forgot Your Password?</a>
            </form>
            <p className='ptxt'>Doesn't have an account?<a href="./Signup.js">Register here!</a></p>
            </div>
            </>
    );
}

export default Login;
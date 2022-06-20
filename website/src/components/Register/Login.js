import React, { useState, useEffect, useRef } from 'react';
import './Login.css';
import {Button} from '../Button/Button';
// import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import logincss from './login.module.css';
import Navbar from '../Navbar/Header';

export function Login(){

    const [previousInput, setpreviousInput] = useState('');
    const [EmailInput, setEmailInput] = useState('');
    const [emailValid, setEmailIsValid] = useState(null);
    const [previousPasswd, setpreviousPasswd] = useState('');
    const [passwordInput, setpasswordInput] = useState('');
    const [pwdvalid, setPwdIsValid] = useState(null);
    const mail = useRef();
    const pwd = useRef();
    


    useEffect(() => {        //when you change the input, it will change the state
        if (previousInput === EmailInput) {
            return;
        }
        const timer = setTimeout(() => {
            setpreviousInput(EmailInput);
            setEmailIsValid(EmailInput.includes('@') && EmailInput.includes('.'));  //set the state of the form to the value of the input
        });
        return () => {
            clearTimeout(timer);
        }
    }, [EmailInput, previousInput]);

    useEffect(() => {
        if (previousPasswd === passwordInput) {
            return;
        }
        const timer = setTimeout(() => {
            setpreviousPasswd(passwordInput);
            setPwdIsValid(passwordInput.length > 6);  //set the validation of the password to the value of the input
        });

        return () => {
            clearTimeout(timer);
        }
    }, [passwordInput, previousPasswd]);

    const Submit = async (e) => {   
                                            //when you submit the form
        e.preventDefault();                                             //prevent the default behavior of the form

        const Email = mail.current.value;
        const Password = pwd.current.value;

        console.log(Email, Password);
        const user = {
            Email,
            Password
        };
        fetchlogin(user);  
        let token = {
            token: `Token: ${fetchlogin(user)}`
        };
        // Save token to localStorage
        localStorage.setItem('LoginUser:', JSON.stringify(token)); //set the token in the local storage
    }

    const fetchlogin = async (user) => {                                         //when you submit the form
        
        try {
            const response = await fetch("https://turing-salle-server.herokuapp.com/api/auth/login", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body:  JSON.stringify(user),
                
            });
            if (!response.ok) {
                throw new Error('Request Failed');
            }
            const responseJson = await response.json();
            console.log(responseJson);
    } catch (error) {                                                      //if there is an error
        console.error('Error:', error.message);
    }
}

    const GoogleLogin = async (user) => {                                     // when you click on google login
        try {
            const response = await fetch("https://turing-salle-server.herokuapp.com/api/auth/google/login",  {
            //    tokenId: user.tokenId,
                method: 'GET',
                mode: 'no-cors', 
                headers: {
                    'Content-Type': `application/json`,
                },
            });
           if (!response.ok) {
    throw new Error('Request Failed');
}

         //   Navigate("/off_World");   
        
    } catch (error) {                                                    //if there is an error
        console.error('Error:', error.message);
    }
}

const logout = async (id) => {                                         //when you submit the form
        //   const id = localStorage.getItem('LoginUser:');

        
    try {
        const response = await fetch(`https://turing-salle-server.herokuapp.com/api/auth/logout/${id}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body:  JSON.stringify(),
            
        });
        if (!response.ok) {
            console.log("You are not logged in");
        }


} catch (error) {                                                      //if there is an error
    console.error('Error:' + error.message);
}
        
}


    return(
        <>
        <Navbar />
        <Link to="/update" >Update</Link>
        <div className='containers'>
            <div className='goback'>
            <Link to={'/off_World'} > Go Back</Link>
            </div>
            <div className='logout'>
            {/* {
                    token
                    ? <Link to="/" onClick={logout}>Logout</Link>
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                } */}
            <Link to="#" onClick={logout}>Logout</Link>
            </div>
            
            <div className='container'>
                <h1>Login</h1>

            <form onSubmit={Submit}>
                <div className='texts'>
                    <label htmlFor='email'>Email Adress</label>
                    {/* set the value of the input to the state of the form */}
                    <input type="text" placeholder="Enter Email" ref={mail} onChange={(e) => 
                        setEmailInput(e.target.value)} value={EmailInput}
                        className={`${emailValid === false ? logincss.invalid : ''} ${emailValid === true ? logincss.valid : ''}`}
/>  
                    
                </div ><br></br>

                <div className='texts'>
                    <label>Password</label>
                     {/* set the value of the input to the state */}
                    <input type="password" placeholder="Enter password" ref={pwd} onChange={(e) => 
                        setpasswordInput(e.target.value)} value={passwordInput}
                        className={`${pwdvalid === false ? logincss.invalid : ''} ${pwdvalid === true ? logincss.valid : ''}`}
                        /> 
                </div><br></br>

                <div className='button'>
                    <Button> Login </Button>                    
                </div>
                <h1 className='or'>OR</h1>
            </form>
            
            <div >
                <Button onClick={GoogleLogin}> Login with Google </Button>
            </div>
            <p className='ptxt'>Doesn't have an account?<Link to={'/Signup'}> Register Here!</Link></p>
            </div>
        </div>
            </>
    );
}

export default Login;
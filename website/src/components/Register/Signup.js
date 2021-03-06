import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logincss from './login.module.css';
import './Signup.css';

export function Signup() {

    const [previousInput, setpreviousInput] = useState('');
    const [EmailInput, setEmailInput] = useState('');
    const [emailValid, setEmailIsValid] = useState(null);
    const [nameInput, setNameInput] = useState('');
    const [nameValid, setvalidName] = useState(null);
    const [previousPasswd, setpreviousPasswd] = useState('');
    const [passwordInput, setpasswordInput] = useState('');
    const [pwdvalid, setPwdIsValid] = useState(null);
    const username = useRef();
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

    useEffect(() => {
        if (previousInput === nameInput) {
            return;
        }
        const timer = setTimeout(() => {
            setpreviousInput(nameInput);
            setvalidName(/^[a-zA-Z\s]*$/.test(nameInput));
        });

        return () => {
            clearTimeout(timer);
        }
    }, [nameInput, previousInput]);

    const Submit = async (e) => {                                         //when you submit the form
        e.preventDefault();                                             //prevent the default behavior of the form
        const Name = username.current.value;
        const Email = mail.current.value;
        const Password = pwd.current.value;

        console.log(Name, Email, Password);
        const user = {
            Name,
            Email,
            Password
        };
        fetchRegister(user);
    }

    const fetchRegister = async (user) => {
        console.log(user);
        try {
            const response = await fetch("https://turing-salle-server.herokuapp.com/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                throw new Error('You are Already Logged In');
            }
            const responseJson = await response.json();
            console.log(responseJson);
            alert("Successfully Registered");
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <>
        <div className='container1'>
            <div className='goback'>
            <Link to={'/off_World'} > Go Back</Link>
            </div>
        
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={Submit}>
                <div className='texts'>
                    <label>UserName</label>
                    <input type="text" placeholder="Enter name" ref={username} onChange={(e) => setNameInput(e.target.value)} value={nameInput}
                     className={`${nameValid === false ? logincss.invalid : ''} ${nameValid === true ? logincss.valid : ''}`}
                    />
                    
                </div><br></br>
                <div className='texts'>
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter Email" ref={mail} onChange={(e) => setEmailInput(e.target.value)} value={EmailInput}
                     className={`${emailValid === false ? logincss.invalid : ''} ${emailValid === true ? logincss.valid : ''}`}
                     />
                </div><br></br>
                <div className='texts'>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" ref={pwd} onChange={(e) => setpasswordInput(e.target.value)} value={passwordInput}
                     className={`${pwdvalid === false ? logincss.invalid : ''} ${pwdvalid === true ? logincss.valid : ''}`}
                    />
                </div><br></br>
                <div className='button'>
                    <button type="submit" className="row">Register</button>
                </div>
            </form>

            <p className='ptxt'>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        </div>
</>
    );
}
export default Signup;
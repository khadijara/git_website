import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logincss from './login.module.css';

export function Update() {

    const [previousInput, setpreviousInput] = useState('');
    const [EmailUpdate, setEmailUpdate] = useState('');
    const [emailValid, setEmailIsValid] = useState(null);
    const [nameInput, setNameInput] = useState('');
    const [nameValid, setvalidName] = useState(null);
    const [previousPasswd, setpreviousPasswd] = useState('');
    const [passwordInput, setpasswordInput] = useState('');
    const [pwdvalid, setPwdIsValid] = useState(null);
    const username = useRef();
    const mail = useRef();
    const pwd = useRef();



    useEffect(() => {      
        if (previousInput === EmailUpdate) {
            return;
        }
        const timer = setTimeout(() => {
            setpreviousInput(EmailUpdate);
            setEmailIsValid(EmailUpdate.includes('@') && EmailUpdate.includes('.'));  
        });
        return () => {
            clearTimeout(timer);
        }
    }, [EmailUpdate, previousInput]); 

    useEffect(() => {
        if (previousPasswd === passwordInput) {
            return;
        }
        const timer = setTimeout(() => {
            setpreviousPasswd(passwordInput);
            setPwdIsValid(passwordInput.length > 6);  
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

    const Submit = async (e) => {                                         
        e.preventDefault();                                             
        const Name = username.current.value;
        const Email = mail.current.value;
        const Password = pwd.current.value;

        console.log(Name, Email, Password);
        const user = {
            Name,
            Email,
            Password
        };
        if (EmailUpdate === '' || nameInput === '' || passwordInput === '') {
            alert('Please fill all the fields');
        }
        else if (emailValid === false) {
            alert('Please enter a valid email');
        }
        else if (nameValid === false) {
            alert('Please enter a valid name');
        }
        else if (pwdvalid === false) {
            alert('Please enter a valid password');
        }
        else {
            console.log(user);
        }

    }



    return (
        <>
        <div className='container1'>
            <div className='goback'>
            <Link to={'/off_World'} > Go Back</Link> 
            </div>
        
        <div className="container">
            <h1>Update Profile</h1>
            <form onSubmit={Submit}>
                <div className='texts'>
                    <label>New Name:</label>
                    <input type="text" placeholder="Enter name" ref={username} onChange={(e) => setNameInput(e.target.value)} value={nameInput}
                     className={`${nameValid === false ? logincss.invalid : ''} ${nameValid === true ? logincss.valid : ''}`}
                    />
                    
                </div><br></br>
                <div className='texts'>
                    <label>New Email Address</label>
                    <input type="text" placeholder="Enter Email" ref={mail} onChange={(e) => setEmailUpdate(e.target.value)} value={EmailUpdate}
                     className={`${emailValid === false ? logincss.invalid : ''} ${emailValid === true ? logincss.valid : ''}`}
                     />
                </div><br></br>
                <div className='texts'>
                    <label>New Password</label>
                    <input type="password" placeholder="Enter password" ref={pwd} onChange={(e) => setpasswordInput(e.target.value)} value={passwordInput}
                     className={`${pwdvalid === false ? logincss.invalid : ''} ${pwdvalid === true ? logincss.valid : ''}`}
                    />
                </div><br></br>
                <div className='button'>
                    <button type="submit" className="row">Update</button>
                </div>
            </form>
        </div>
        </div>
</>
    );
}
export default Update;
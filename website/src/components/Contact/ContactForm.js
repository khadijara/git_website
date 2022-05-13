import {React, useState} from 'react';
import './Contact.css';
import {Button} from '../Button/Button';

export function ContactForm() {

    // create state variables for the contact form inputs and set them to empty strings by default.
    const [Formname, setFormName] = useState('');
    const [Formemail, setFormEmail] = useState('');
    const [Formmessage, setFormMessage] = useState('');

    return(
        <>
         <div className="form">
            <form >
                <div className='contact-form'>
                    <label>Name</label>
                    <input type="text" placeholder="Enter name"  onChange={(e) => setFormName(e.target.value)} value={Formname}
                    />                    
                </div>
                <div className='contact-form'>
                    <label>Email</label>
                    <input type="text" placeholder="Enter Email"  onChange={(e) => setFormEmail(e.target.value)} value={Formemail}
                    />
                </div>
                <div className='contact-form'>
                    <label>Message</label>
                    <textarea type="text" placeholder="Enter Message"  onChange={(e) => setFormMessage(e.target.value)} value={Formmessage}
                    />
                </div>
                <div className='button'>
                    <Button className="submitF"> Submit </Button>
                </div>
            </form>
        </div>
        </>
    );
}

export default ContactForm;
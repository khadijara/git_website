import { React, useRef } from 'react';
import './Contact.css';
import { Button } from '../Button/Button';
import emailjs from "emailjs-com";

export function ContactForm() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7y7jw9b', 'template_hvr6p2n', form.current, 'vSwKlC1gWwW1EdoeR')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (

        <>
            <div className="form" >
            <form ref={form} onSubmit={sendEmail}>
                <div className='contact-form'>
                    <label>Name</label>
                    <input className="InputValue" type="text" placeholder="Enter name" name="user_name" 
                    />                    
                </div>
                <div className='contact-form'>
                    <label>Email</label>
                    <input type="text"className="InputValue" placeholder="Enter Email" name="user_email" 
                    />
                </div>
                <div className='contact-form'>
                    <label>Message</label>
                    <textarea type="text" className="InputValue" name="message" placeholder="Enter Message"
                    />
                </div>
                <div >
                    <Button type="submit" className="submitF" >Send</Button>
                </div>
            </form>
        </div>
        </>
    );
}

export default ContactForm;
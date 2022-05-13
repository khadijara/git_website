import React from 'react';
import  vid from '../../assets/Contact.mp4';
import './Contact.css';
import ContactHelp from './ContactHelp';

export function Contact(){
    return(
        <>
        <div className="contact">
        <video autoPlay loop muted id="sContact">
                <source src={vid} type="video/mp4" />
            </video>
        <h1>Contact Us</h1>
        </div>
        < ContactHelp />
        </>
    );
}


export default Contact;
import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

export function ContactHelp() {
    return (
<>
    
    <div className="container2">
        <div className="col-md-12">  
                <h1>Contact Us</h1>
                <p>
                    If you have any questions, please feel free to contact us, our customer service center is working for you 24/7.
                </p>            
        </div>
        <div className="row1">
        <div className="col-md-8">
            <ContactForm />
            </div>
            <div className="col-md-4">
                <h3>Contact</h3>
                <p>
                    <strong>Address:</strong> 123 Main Street, Anytown, CA 12345
                </p>
                <p>
                    <strong>Phone:</strong> (123) 456-7890
                </p>
                <p>
                    <strong>Fax:</strong> (123) 456-7890
                </p>
                <p>
                    <strong>Email:</strong> email
                </p>
            </div>
        </div>
    </div>
</>
    );
}

export default ContactHelp;


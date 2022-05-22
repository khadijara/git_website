import React from 'react';
import  about from '../../assets/aboutbck.mp4';
import '../Contact/Contact.css';
import './AboutMain.css'
import image from '../../assets/about2.jpg';
import What from '../../assets/what.jpg';

export function AboutMain(){
    return(
        <>
        <div className="contact">
        <video autoPlay loop muted id="sContact">
                <source src={about} type="video/mp4" />
            </video>
        <h1>About Us</h1>
        </div>
        <div className='vision'>
        <img className="about" src={image} alt="Logo"></img>
        <h1 >Our Vision</h1>
        <blockquote>
            "We envision millions of smart robots working under human supervision on and offworld, 
            turning the inner solar system into a better, gentler, greener place for life and civilization."
        </blockquote>
        <p className='pvision'>
            We are a team of highly motivated and dedicated engineers, designers, and researchers.
            We can't simply export the 20th century heavy industrial paradigm offworld. So in pursuit of our offworld aspirations, 
            we are reinventing how we mine, process, manufacture and build cities on Earth.
        </p>
        </div>
        <div  className='vision'>
        <img className="about" src={image} alt="Logo"></img>
        <h1  className='who'>What we do?</h1>
        <p className='ppvision'>
        We develop games, 
        and are highly focused on delivering the full vision we have for our flagship product Squad to our loyal fan base.
        <br></br><hr></hr>
        We create technology, and plan to bring the framework powering Squad to other indie studios and 
        startups looking to make mass multiplayer and vehicle based first person shooters or survival games.
        </p>
        </div>
        <div>
        <img className="what" src={What} alt="Logo"></img>
        </div>
        </>
    );
}


export default AboutMain;
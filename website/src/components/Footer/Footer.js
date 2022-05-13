import React from 'react';
import  logo from '../../assets/Logo.png';
import {FooterArrayCl1 , FooterArrayCl2, FooterArrayCl3} from './FooterArray';
import './Footer.css';
export function Footer(){
        return(
            
                <>
                <div className="footer">
                <div className="footer-content">
                    <h1 className="footer-content-left">
                        Alan Turing</h1>
                    <img src={logo} alt="Logo" width="70" height="80"></img>
                </div>

                <div className="footer-content-right-col1">
                    
                    <ul>
                    <h1 className='heading'>Links</h1>
                        {FooterArrayCl1.map((item) => {
                            return (
                                
                                <li key={item.id}>
                                    <a className={item.classname} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                                
                            );
                        })}

                    </ul>
                </div>

                <div className="footer-content-right-col2">
                    <ul>
                    <h1 className='heading'>Have Questions?</h1>
                        {FooterArrayCl2.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}

                    </ul>
                </div>

                <div className="footer-content-right-col3">
                    <ul>
                    <h1 className='heading'>Socials</h1>
                        {FooterArrayCl3.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
            <div className='copyright'>
                    <div className='footer'>

                        <p className='copyright1'>© 2022 Alan_Turing. All rights reserved.</p>

                    </div>
                </div>
                    </>
                     );

                    }

                    export default Footer;
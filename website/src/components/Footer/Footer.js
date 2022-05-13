import React from 'react';
import  logo from '../../assets/Logo.png';
import {FooterArrayCl1 , FooterArrayCl2, FooterArrayCl3} from './FooterArray';
export function Footer(){
        return(
            <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <h1>Alan Turing</h1>
                         <img src={logo} alt="Logo"  width="70" height="80"></img>
                    </div>
                    <div className="footer-content-right-col1">
                    <ul >
                    {FooterArrayCl1.map((item) => {
                        return (
                            <li>
                                <a key={item.id} className={item.classname} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                    </div>
                    <div className="footer-content-right-col2">
                    <ul >
                    {FooterArrayCl2.map((item) => {
                        return (
                            <li>
                                <p key={item.id} >
                                    {item.title}
                                </p>
                            </li>
                        )
                    })}

                </ul>
                    </div>
                    <div className="footer-content-right-col3">
                    <ul >
                    {FooterArrayCl3.map((item) => {
                        return (
                            <li>
                                <a key={item.id}  href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <div className='container'>
                    <p> 
                    <p>© 2020 Off_World. All rights reserved.</p>
                    </p>
                </div>
            </div>

            </>
        )
}

export default Footer;
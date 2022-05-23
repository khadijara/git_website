import React from 'react';
import { Basic, Standard} from './pricingArray';
import {Button} from '../Button/Button';
import './pricinghome.css';
import {Link} from 'react-router-dom';

export function PricingHome(){
            return (
                <>
                <h1 className='head'>Our Pricing</h1>
                <div className='row1' >
                    <div className='cont col-md-5'>
                        <h4>Basic</h4>
                        {Basic.map((item) => {
                            return (
                                
                                <h1 key={item.id}>
                                    <p className='ptext'>
                                        {item.title}
                                    </p>
                                </h1>
                                
                            );
                        })}
                        <Button ><Link to={'/Contact'}>Contact Us</Link> </Button>
                    </div>
                    <div className='cont col-md-3'>
                        <h4>Standard</h4>
                        {Standard.map((item) => {
                            return (
                                
                                <h1  key={item.id}>
                                    <p className='ptext'>
                                        {item.title}
                                    </p>
                                </h1>
                                
                            );
                        })}
                        <Button><Link to={'/Contact'}>Contact Us</Link> </Button>
                        </div>
                    </div>
                </>
            );

}

export default PricingHome;
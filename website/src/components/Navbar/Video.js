import React from 'react';
import './Video.css';
import homeVideo from '../../assets/Home_Video.mp4';


export function Video() {


    return (
        <div className="Video">
            <video autoPlay loop muted id="svideo"> 
                <source src={homeVideo} type="video/mp4" />
                </video>
        <div className='text'>       
                                <h1 id="Title">
                                </h1>
        </div>
        </div>
    )
    }

    export default Video;
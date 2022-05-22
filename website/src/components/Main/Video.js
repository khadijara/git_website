import React from 'react';
import './Video.css';
import homeVideo from '../../assets/Home_Video.mp4';


export function Video() {


    return (
        <div className="Video">
            <video autoPlay loop muted id="svideo">
                <source src={homeVideo} type="video/mp4" />
            </video>
            <div className='txt'>
                <h1 id="Title">
                </h1>
                <h3> Welcome to Off_World</h3>
                <p id='subtitle'>
                    We say "Hello" to the world in more than 10 Languages.
                </p>
            </div>
        </div>
    )
}

export default Video;
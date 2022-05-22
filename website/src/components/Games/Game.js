
import React from 'react';
import './Game.css';
import image from '../../assets/squad.jpg';
import '../Pricing/pricinghome.css';
import image1 from '../../assets/post scriptum.jpg'
export function Game(){
        return(
            <>
            <h1 className='head'>Our Games</h1>
            <p className='gamep'>We are proud of what we do and especially proud of our games and games we helped to realize. 
                So take your time, check out our games and see what we have been working on.
            </p>
            <div  className='row1'>
            <div className='game1'>
            <img src={image} alt="Logo" id='game1' ></img>
            <p className='pgame'>
            SQUAD is an online multiplayer first-person shooter that aims to capture combat realism through communication and teamplay. 
            Based on the acclaimed modification Project Reality, Squad seeks to bridge the gap between arcade shooter and military simulation. Major features include vehicle-based combined arms gameplay, 
            large scale environments, base building, and integrated positional VoIP for proximity talking & radio.
            </p>
            </div>
            <div className='game2'>
            <img src={image1} alt="Logo" id='game2' ></img>
            <p className='pgame1'>
            Post Scriptum is a WW2 simulation game, focusing on historical accuracy, large scale battles, 
            a difficult learning curve and an intense need for cohesion, communication and teamwork. Experience a full-scale battlefield with 80-Player Servers, 50+ usable vehicles, Squad roles, Supply runs and Base Building. 
            Post Scriptum is a unique experience, recreating a Historically Accurate, Immersive & Realistic gameplay.
            </p>
            </div>
            </div>
            <br></br>
            <div className='game1'>
            <img src={image1} alt="Logo" id='game' ></img>
            <p className='pgames'>
            Post Scriptum is a WW2 simulation game, focusing on historical accuracy, large scale battles, 
            a difficult learning curve and an intense need for cohesion, communication and teamwork. Experience a full-scale battlefield with 80-Player Servers, 50+ usable vehicles, Squad roles, Supply runs and Base Building. 
            Post Scriptum is a unique experience, recreating a Historically Accurate, Immersive & Realistic gameplay.
            </p>
            </div>
            </>
        );
}

export default Game;
import React, {useState} from 'react';
import  image from '../../assets/team.jpg';
import xavi from '../../assets/xavi.png';
import gerard from '../../assets/gerard.jpg';
import alex from '../../assets/andreba.jpg';
import khadija from '../../assets/khadija.jpg';
import './Team.css';
import TeamList from './TeamList';

const TeamData = [
    { id: 1, text: 'FrontEnd Developer', title: 'Gerard Marquina', url: [gerard] },
    { id: 2, text: 'BackEnd Developer', title: 'Alex Andreba', url: [alex] },
    { id: 3, text: 'Backend Developer',title: 'Xavi Moya', url: [xavi] },
    { id: 4, text: 'Frontend Developer', title: 'Khadija Rehman', url: [khadija]},
  ];
export function Teamheader(){
    const [team, setteam] = useState(TeamData);
    return(
        <>
        
        <div className="team">
         <img src={image} alt="Logo" id="steam"></img>
        <h1>Our Team</h1>
        </div>
        <main>
        <header>
            <h1 className='headTeam'>Meet Our Team</h1>
        </header>        
        <section>
        <TeamList items={team}/>
        </section>
        </main>
        </>
    );
}


export default Teamheader;
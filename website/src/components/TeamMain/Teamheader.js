import React, {useState} from 'react';
import  image from '../../assets/team.jpg';
import xavi from '../../assets/xavi.png';
import gerard from '../../assets/gerard.jpg';
import alex from '../../assets/andreba.jpg';
import khadija from '../../assets/khadija.jpg';
import './Team.css';
import TeamList from './TeamList';

const TeamData = [
    { id: 1, text: 'FrontEnd Developer', title: 'Gerard Marquina', url: [gerard],  linkedIn:'' },
    { id: 2, text: 'BackEnd Developer', title: 'Alex Andreba', url: [alex] , linkedIn:''},
    { id: 3, text: 'FrontEnd Developer',title: 'Xavi Moya', url: [xavi], linkedIn:'' },
    { id: 4, text: 'BackEnd Developer', title: 'Khadija Rehman', url: [khadija], linkedIn:'' },
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
            <h2>Meet Our Team</h2>
        </header>        
        <section>
        <TeamList items={team}/>
        </section>
        </main>
        </>
    );
}


export default Teamheader;
import Team from './TeamMain';
import './Team.css';

function TeamList(props) {
  return (
    <section className='section1'>
      <ul className='list'>
        {props.items.map((item) => <Team key={item.id} text={item.text} title={item.title} image={item.url} linkenIn={item.linkenIn}/>)}
      </ul>
      </section>
  );
}
export default TeamList;



// return <img src={props.url} alt=""/>; 
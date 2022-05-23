import Team from './TeamMain';
import './Team.css';

function TeamList(props) {
  return (
    <section className='section1'>
      <ul className='list'>
        {props.items.map((item) => <Team key={item.id} text={item.text} title={item.title} image={item.url}/>)}
      </ul>
      </section>
  );
}
export default TeamList;




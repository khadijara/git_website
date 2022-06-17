import {React , useState} from 'react';
import { Menu } from './Menu';
import {Button} from '../Button/Button';
// import logo from '../../assets/Logo.png';
import {Link}  from 'react-router-dom';
import './Header.css';

export function Header() {

     // state when you click on something
    const [clicked, setClicked] = useState(false);
    // const [isLogged , setisLogged] = useState(false);
    // const [user , setUser] = useState(false);

    const click = () => {
        setClicked(!clicked)
    }

    // const transForm = {
    //     tranform: isLogged ? "translateY(-5px)" : 0,
    // }


    // const use = () => {
    //     if(isLogged){  // if user is logged in then show the user link
    //         return(
    //             <div className="user-link">
    //                 {/* <Link to="/update">
    //                     <Button>Update</Button>
    //                 </Link> */}
    //                 <Link to="/logout">
    //                     <Button>Logout</Button>
    //                 </Link>

    //             </div>
    //         )
    //     }
    // }

    
    // const logg = async () => {                                         //when you submit the form
        
    //     try {
    //         const response = await fetch("https://turing-salle-server.herokuapp.com/api/auth/logout/:id", { 
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }, 
    //             body:  JSON.stringify(),
                
    //         });

    //         if (!response.ok) {
    //             console.log("You are not isLogged in");
    //         }
    
    
    // } catch (error) {                                                      //if there is an error
    //     console.error('Error:' + error.message);
    // }
    // }

    return(
        <nav className='Header'>
        <h1 className='Header-logo'>
            {/* <img src={logo} alt="Logo"  width="70" height="80"></img> */}
            Off_World
            
        </h1>
        <div className='Menu' onClick={click}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>  {/* if clicked is true, show x, else show bars */}
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {Menu.map((item) => {
                return (
                    <li key={item.id}>
                        <a  className={item.classname} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}

        </ul>
        <Link to="/login"><Button>Register </Button></Link><br></br>
        {/* <Link to="/update"><Button>Update </Button></Link> */}
        {/* <ul style={transForm} >
                {
                    isLogged ? user()  : <Button><Link to="/login"><></> Register</Link></Button>
                }     
        </ul> */}
    </nav>
    );
}

export default Header;
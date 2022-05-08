import React from 'react'
import { Menu } from './Menu';
import './Header.css';
import {Button} from '../Button';

class Header extends React.Component {

    state = { clicked: false} //stating when you click on something
    click = () => {
        this.setState({clicked: !this.state.clicked}) //if clicked is true, set it to false, else set it to true
    }
    render() {
        return (
            <nav className='Header'>
                <h1 className='Header-logo'>
                    React<i className='fab fa-react'></i>
                </h1>
                <div className='Menu' onClick={this.click}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>  {/* if clicked is true, show x, else show bars */}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Menu.map((item, index) => {
                        return (
                            <li>
                                <a className={item.classname} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
                <Button> Register </Button>
            </nav>
        )
    }
}

export default Header;
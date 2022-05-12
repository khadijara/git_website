import React from 'react';
import './Button.css';

const STYLE = [
    'btn--primary',
    'btn--outline',
]

const SIZE = [ 
    'btn--medium',
    'btn--large',
]

export const Button = ({
    children,       // The text inside the button
    type,        // The type of button
    onClick,   // The onClick event
    buttonStyle,  // The button style
    buttonSize,   // The button size
}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]; //if buttonStyle is not in STYLE, set it to STYLE[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]; //if buttonSize is not in SIZE, set it to SIZE[0]

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} // The button class names
            onClick={onClick}  
            type={type}   
        >
            {children}  {/* The text inside the button */}
        </button>
    )
}
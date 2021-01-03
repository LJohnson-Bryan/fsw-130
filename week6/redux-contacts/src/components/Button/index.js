import React from 'react';
import './styles.css';

const Button = (props) => {
    return ( 
        <button className={`${props.color}-button`} {...props} >{props.children}</button>
    );
}

Button.defaultProps = {
    color: "blue"
}

export default Button;

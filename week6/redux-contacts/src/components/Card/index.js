import React from 'react';
import Button from '../Button';
import './styles.css';

const Card = (props) => {
    return ( 
        <div className="card">
            <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h3>email: {props.email}</h3>
            {/* <Button onClick={() => { 
                props.removeContact(props._id)
            }}>Delete</Button> */}
            {props.children}
        </div>
    );
}

export default Card;

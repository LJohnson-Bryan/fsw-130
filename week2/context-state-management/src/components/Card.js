import React from 'react';

const Card = (props) => {
    return ( 
        <div className="card">
        <div class="img" style={{backgroundImage: "url(" + props.link + ")"}}></div>
        <span>{props.title} - {props.created}</span>    
        </div>
    );
}

export default Card;

import React from 'react';
import './styles.css';

const TransactionCard = (props) => {
    return ( 
        <div className="transaction">
            <h2>Details: </h2>
            <h4>to: {props.to}</h4>
            <h4>for: {props.for}</h4>
            <h4 className={`${props.amount >= 0 ? "red" : "green"}`}>{props.amount >= 0 ? "-" : "+" } ${props.amount < 0 ? props.amount * -1 : props.amount}</h4>
        </div>
    );
}

export default TransactionCard;

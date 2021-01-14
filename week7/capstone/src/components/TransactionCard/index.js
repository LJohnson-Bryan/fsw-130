import React from 'react';
import './styles.css';
import commaNumber from 'comma-number';

const TransactionCard = (props) => {
    return ( 
        <div className={`transaction ${props.alternate === 1 && 'gray-bg'}`}>
            <h4>to: {props.to}</h4>
            <h4>for: {props.for}</h4>
            <h4 className={`${props.amount >= 0 ? "red" : "green"}`}>{props.amount >= 0 ? "-" : "+" } ${props.amount < 0 ? commaNumber(props.amount * -1) : commaNumber(props.amount)}</h4>
        </div>
    );
}

export default TransactionCard;

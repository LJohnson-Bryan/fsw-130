import {React, useState} from 'react';
import {BankContextConsumer} from '../BankContext';
import Button from '../Button';
import Container from '../Container';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer';

const Transfer = () => {
    const [toField, setToField] = useState('');
    const [forField, setForField] = useState('');
    const [amountField, setAmountField] = useState(undefined);
    const history = useHistory();

    return ( 
        <>
        <BankContextConsumer>
            {context => (
                <Container>
                    <div className="transfer quick-action">
                        <h1>Transfer</h1>
                        <h2>Send Money</h2>
                        <Link to="/profile">Go Home</Link>
                        <form className="transfer-form" onSubmit={e => {
                            e.preventDefault();
                            context.addTransaction(toField, forField, amountField, "Logan Johnson");
                            setToField('');
                            setForField('');
                            setAmountField(undefined);
                            history.push("/profile");
                        }}>
                            <p className="tc rel-input">To:</p>
                            <input placeholder="Write to who here." value={toField} onChange={e => setToField(e.target.value)} />
                            <p className="tc rel-input">For:</p>
                            <input placeholder="Write your memo here." value={forField} onChange={e => setForField(e.target.value)} />
                            <p className="tc rel-input">Amount:</p>
                            <input placeholder="Enter your amount to transfer." type="number" value={amountField} onChange={e => setAmountField(e.target.value)}/>
                            <Button classes="btn-center">Send</Button>
                        </form>
                    </div>
                </Container>
            )}
        </BankContextConsumer>
        <Footer />
        </>
    );
}

export default Transfer;

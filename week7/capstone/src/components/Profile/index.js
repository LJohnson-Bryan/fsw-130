import React from 'react';
import {BankContextConsumer} from '../BankContext';
import Container from '../Container';
import profileImage from '../../images/logan.PNG';
import './styles.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import TransactionCard from '../TransactionCard';

const Profile = () => {
    return ( 
        <>
        <BankContextConsumer>
            {context => (
                <Container>
                    <div className="grid-admin">
                        <div>
                            <div className="profile-name">
                                <img src={profileImage} className="profile-picture" alt="Profile"/> <span className="user-name">Logan Johnson</span>
                            </div>
                            <div className="ml-3 quick-action">
                                <h3>Quick Actions:</h3>
                                <Link to="/transfer">Transfer Money</Link>
                                <Link to="/">Logout</Link>
                            </div>
                        </div>
                        <div>
                            <h2>Balance: ${context.state.profiles[0].balance}</h2>
                            
                            <h3>Recent Transactions:</h3>
                            {context.state.profiles[0].transactions.map(item => <TransactionCard to={item.to} for={item.for} amount={item.amount} />)}
                        </div>
                        <div className="contacts">
                            <h2>Contacts</h2>
                            {context.state.profiles.map(person => person.name !== "Logan Johnson" && <h4>{person.name}</h4>)}
                        </div>
                    </div>
                </Container>
            )}
        </BankContextConsumer>
        <Footer />
        </>
    );
}

export default Profile;

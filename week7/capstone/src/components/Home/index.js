import {React, useState} from 'react';
import Button from '../Button';
import Container from '../Container';
import Footer from '../Footer';
import {useHistory} from 'react-router-dom';
import './styles.css';

const Home = () => {
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    return ( 
        <div className="login-bg">
            <Container>
                <form onSubmit={e => {
                    e.preventDefault();
                    if(usernameField === "Logan_Johnson" && passwordField === "password") {
                        setErrorMessage('');
                        history.push("/profile");
                    } else {
                        setErrorMessage('Incorrect username or password!');
                    }
                }}
                className="login-form">
                    <h1 className="tc title">MyBank</h1>
                    <h3 className="tc subtitle">Keep your money safe and secure.</h3>
                    <div className="line"></div>
                    {errorMessage !== '' && <div className="error-field tc">{errorMessage}</div>}
                    <input placeholder='Username..' type='text' value={usernameField} onChange={e => setUsernameField(e.target.value)} />
                    <input placeholder='Password..' type='password' value={passwordField} onChange={e => setPasswordField(e.target.value)}/>
                    <Button>Login</Button>
                </form>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;

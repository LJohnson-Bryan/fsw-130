import {React, useState} from 'react';
import Container from './components/Container';
import Button from './components/Button';
import {connect} from 'react-redux';
import {addContact, removeContact, getContacts} from './redux/contacts';
import './index.css';
import Card from './components/Card';

const App = (props) => {

  const [ageField, setAgeField] = useState();
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  
const {removeContact, addContact} = props;

  return (
    <Container>
      <form onSubmit={e => {
        e.preventDefault();
        addContact({
          name: nameField,
          age: ageField,
          email: emailField
        });
        setAgeField('');
        setNameField('');
        setEmailField('');
      }}>
        <h2>Add New Contact</h2>
        <input placeholder="Name" value={nameField} onChange={e => setNameField(e.target.value)} />
        <input placeholder="Age" type="number" value={ageField} onChange={e => setAgeField(e.target.value)}/>
        <input placeholder="Email" value={emailField} onChange={e => setEmailField(e.target.value)} />
        <Button>Submit</Button>
      </form>

      <div className="content">
      {props.contacts.map(person =>
        <Card name={person.name} age={person.age} email={person.email} _id={person._id}>
          <Button onClick={() => { 
                removeContact(person.name)
            }}>Delete</Button>
        </Card>
      )}
      </div>

    </Container>
  );
}

const mapStateToProps = state => {
  return {
      contacts: state
  }
}

const mapDispatchToProps = {
  addContact,
  removeContact,
  getContacts
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

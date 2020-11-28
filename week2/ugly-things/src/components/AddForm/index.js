import {React, useState} from 'react';
import {ThingContextConsumer} from '../ThingsContext';
import './../../styles.css';

const AddForm = () => {

    const [ThingTitle, setThingTitle] = useState(''); 
    const [ThingDescription, setThingDescription] = useState(''); 
    const [ThingLink, setThingLink] = useState(''); 

    return ( 
        <ThingContextConsumer>
            {context => (
            <div>
                <h1 style={{textAlign: "center"}}>Ugly Things</h1>
                <form onSubmit={e => {
                    e.preventDefault();
                    context.addThing(ThingTitle, ThingDescription, ThingLink);
                    setThingTitle('');
                    setThingDescription('');
                    setThingLink('');
                }}>
                    <input value={ThingTitle} onChange={e => { setThingTitle(e.target.value) }} placeholder="Enter Ugly Thing..."/>
                    <input value={ThingDescription} onChange={e => { setThingDescription(e.target.value) }} placeholder="Enter Ugly Thing Description..."/>
                    <input value={ThingLink} onChange={e => { setThingLink(e.target.value) }} placeholder="Enter Thing Ugly Title Preview Link..."/>
                    <button>Submit</button>
                </form>
            </div>
            )}
        </ThingContextConsumer>
    );
}

export default AddForm;

import {React, useState} from 'react';
import {TVContextConsumer} from '../TVShowsContext';
import './styles.css';

const AddForm = () => {

    const [tvShowTitle, setTvShowTitle] = useState(''); 
    const [tvShowYear, setTvShowYear] = useState(''); 
    const [tvShowLink, setTvShowLink] = useState(''); 

    return ( 
        <TVContextConsumer>
            {context => (
                <form onSubmit={e => {
                    e.preventDefault();
                    context.addShow(tvShowTitle, tvShowYear, tvShowLink);
                    setTvShowTitle('');
                    setTvShowYear('');
                    setTvShowLink('');
                }}>
                    <input value={tvShowTitle} onChange={e => { setTvShowTitle(e.target.value) }} placeholder="Enter TV Show..."/>
                    <input value={tvShowYear} onChange={e => { setTvShowYear(e.target.value) }} placeholder="Enter TV Show Year..."/>
                    <input value={tvShowLink} onChange={e => { setTvShowLink(e.target.value) }} placeholder="Enter TV Show Title Preview Link..."/>
                    <button>Submit</button>
            </form>
            )}
        </TVContextConsumer>
    );
}

export default AddForm;

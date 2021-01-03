import redux, {createStore} from 'redux';
import {contactReducer} from './contacts';

// Create the store, subscribe to the changes (log them in console every time it updates for easy debugging).
const store = createStore(contactReducer)
store.subscribe(() => console.log(store.getState()))

// Export the store.
export default store

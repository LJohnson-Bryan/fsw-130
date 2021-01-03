export const addContact = obj => {
    return {
        type: "ADD_CONTACT",
        payload: obj
    }
}

export const removeContact = id => {
    return {
        type: "REMOVE_CONTACT",
        payload: id
    }
}

export const getContacts = () => {
    return {
        type: "GET_CONTACTS"
    }
}

const initialState = [
    {
        name: "John Doe",
        age: 30,
        email: "johndoe@gmail.com"
    },
    {
        name: "Jane Doe",
        age: 30,
        email: "JannnneDoe@gmail.com"
    }
];

export const contactReducer = (contacts = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            return [...contacts, action.payload];
        case "REMOVE_CONTACT":
            return contacts.filter(contact => contact.name !== action.payload);
        case "GET_CONTACTS":
            return contacts;
        default:
            return contacts;
    }
}

const redux = require("redux")

const addContact = (obj) => {
    return {
        type:"ADD_CONTACT",
        payload: obj
    }
}

const removeContact = (name) => {
    return {
        type:"REMOVE_CONTACT",
        payload: name
    }
}

const initialState = [
    {
        name: "Jeff Hill",
        age: 73,
        phone: 2706372672
    },
    {
        name: "Drew Hinthorn",
        age: 23,
        phone: 5126678855
    },
    {
        name: "Chris Taul",
        age: 34,
        phone: 2706784838
    }
]

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE_CONTACT":
            const newState = state.filter(item => {
                if(item.name !== action.payload) {
                    return item;
                }
            });
            return newState;
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({
    name: "Jeff Dunham",
    age: 30,
    phone: 2779085678
}));

store.dispatch(removeContact("Jeff Dunham"));

store.dispatch(addContact({
    name: "Jeffaa Dunham",
    age: 30,
    phone: 2779085678
}));

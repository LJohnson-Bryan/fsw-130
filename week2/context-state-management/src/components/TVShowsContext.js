import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class TVContextProvider extends Component {
    state = {
        data: [
        {
            title: "Test TV Show",
            created: 2020,
            link: "https://images.unsplash.com/photo-1588442742006-ca3547ac60fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80"
        },
        {
            title: "Test TV Show",
            created: 2020,
            link: "https://images.unsplash.com/photo-1606440894295-8a79c32fdaf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
        }
    ]}
    
    addShow = (title, year, link) => {
        this.setState(prevState => {
            return prevState.data.push({title: title, created: year, link: link});
        })
    }
    
    render() {
        const state = this.state;
        const addShow = this.addShow;
        return (
            <Provider value={{state, addShow}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {TVContextProvider, Consumer as TVContextConsumer}

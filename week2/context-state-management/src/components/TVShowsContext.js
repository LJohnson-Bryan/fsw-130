import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class TVContextProvider extends Component {
    state = {
        data: [
        {
            title: "Mandalorian",
            created: 2020,
            link: "https://imgix.bustle.com/uploads/image/2020/11/19/d66dd1be-49fc-46f6-b9fd-a40f20304b74-102419_disney-the-mandalorian-00-1-780x440-1572307750.jpg"
        },
        {
            title: "The Simpsons",
            created: 1989,
            link: "https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/keyart_s32simp.jpg"
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

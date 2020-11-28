import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class ThingContextProvider extends Component {
    state = {
        data: [ 
        {
            title: "Ugly Picture",
            description: "Wow, It's so ugly!",
            link: "https://media.npr.org/assets/img/2013/10/03/quentin_matsys_-_a_grotesque_old_woman_sq-03cd35274841241d3b998898b1d1d27fb3bca299-s800-c85.jpg"
        },
        {
            title: "My Pet Bat!",
            description: "Awwh! Look how ugly he is!",
            link: "https://i.pinimg.com/originals/83/52/71/835271ff7bf0d2557cec9c98b36ea9ce.png"
        },
        {
            title: "Spongebob",
            description: "Handsome guy, but ugly when he makes this face!",
            link: "https://pbs.twimg.com/profile_images/488517654584389633/Bw8d7Oii.jpeg"
        }
    ]}
    
    getIndexOfThing = (title) => {
        let id;
        this.state.data.forEach(item => {
            if (item.title === title) {
                id = this.state.data.indexOf(item)
            }
        });
        return(id);
    }

    updateThing = (title, update) => {
        this.setState(prevState => (
            prevState.data[this.getIndexOfThing(title)] = update
        ))
    }

    removeThing = (title) => {
        this.getIndexOfThing(title) &&  this.setState(prevState => (
            prevState.data.splice(this.getIndexOfThing(title), 1)
        ));
    }

    addThing = (title, description, link) => {
        this.setState(prevState => {
            return prevState.data.push({title: title, description: description, link: link});
        })
    }
    
    render() {
        const state = this.state;
        const addThing = this.addThing;
        const removeThing = this.removeThing;
        const updateThing = this.updateThing;
        return (
            <Provider value={{state, addThing, removeThing, updateThing}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {ThingContextProvider, Consumer as ThingContextConsumer}

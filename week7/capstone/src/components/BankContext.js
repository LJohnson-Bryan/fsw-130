import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class BankContextProvider extends Component {
    state = {
        profiles: [
            {
            name: "Logan Johnson",
            balance: 1798322,
            transactions: [
                {
                    to: "Christian Vanloon",
                    for: "Money.",
                    amount: 19000
                },
                {
                    to: "Logan Johnson",
                    for: "Received Payment from Elon Musk.",
                    amount: -15068.05
                },
                {
                    to: "Billy Bob",
                    for: "Sending money to people to be kind.",
                    amount: 2000
                },
                {
                    to: "Freddy Joe",
                    for: "Payment",
                    amount: 200
                }
            ]
            },
            {
                name: "Christian Vanloon",
                balance: 1000000,
                transactions: []
            },
            {
                name: "Elon Musk",
                balance: 800000000000,
                transactions: []
            },
            {
                name: "Jeff Bezos",
                balance: 799000000000,
                transactions: []
            },
            {
                name: "Bill Gates",
                balance: 25000000,
                transactions: []
            }
        ]
    }
    
    getIndexOfAccount = name => {
        let index = this.state.profiles.findIndex(item => item.name === name);
        return(index);
    }

    addTransaction = (toPerson, forWhat, amount, account) => {
        const index = this.getIndexOfAccount(account);
        const selectedAccount = this.state.profiles[index];
        selectedAccount.balance = selectedAccount.balance - amount;
        selectedAccount.transactions = [{
            to: toPerson,
            for: forWhat,
            amount: amount
        }, ...selectedAccount.transactions];
        this.setState(selectedAccount);
    }

    
    render() {
        const state = this.state;
        const addTransaction = this.addTransaction;
        return (
            <Provider value={{state, addTransaction}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {BankContextProvider, Consumer as BankContextConsumer}

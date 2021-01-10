import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { BankContextProvider } from './components/BankContext';
import Home from './components/Home';
import Profile from './components/Profile';
import Transfer from './components/Transfer';

const App = () => {
  return (
    <BankContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/transfer" component={Transfer} />
        </Switch>
      </Router>
    </BankContextProvider>
  );
}

export default App;

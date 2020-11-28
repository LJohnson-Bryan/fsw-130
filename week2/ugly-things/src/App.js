import React from 'react';
import Card from './components/Card';
import {ThingContextConsumer} from './components/ThingsContext';
import AddForm from './components/AddForm/';
import './styles.css';

const App = () => {
  return (
    <ThingContextConsumer>
      {context => (
        <div className="container">
          <AddForm />
            <div className="cardContainer">
              {
                context.state.data.map(item => {
                  return <Card title={item.title} link={item.link} description={item.description} key={item.title} />
                })
              }
            </div>
        </div>
      )}
    </ThingContextConsumer>
  );
}

export default App;

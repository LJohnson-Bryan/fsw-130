import React from 'react';
import Card from './components/Card';
import {TVContextConsumer} from './components/TVShowsContext';
import AddForm from './components/AddForm/';

const App = () => {
  return (
    <TVContextConsumer>
      {context => (
        <div className="container">
          <AddForm />
            <div className="cardContainer">
              {
                context.state.data.map(item => {
                  console.log(context.state.data);
                  return <Card title={item.title} created={item.created} link={item.link}/>
                })
              }
            </div>
        </div>
      )}
    </TVContextConsumer>
  );
}

export default App;

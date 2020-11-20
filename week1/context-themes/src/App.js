import {React, useState} from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import ThemeContext from './ThemeContext';

const App = () => {
const [style, setTheme] = useState("light");
  return ( 
    <div>
      <ThemeContext.Provider value={{style, setTheme}}>
        <Navbar />
        <Main />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

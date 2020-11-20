import React from 'react';
import ThemeContext from './ThemeContext';

const Navbar = () => {
    return ( 
        <ThemeContext.Consumer>
            {theme => (
                <nav className={`${theme.style}-nav flex-between`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            )}
        </ThemeContext.Consumer>
    );
}

export default Navbar;

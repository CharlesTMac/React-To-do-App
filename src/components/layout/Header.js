import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <header style={headerStyle}>
            <h1>TO-DO LIST</h1>
        <Link to="/" style={linkStyle}>Home</Link> | <Link to="/About" style={linkStyle}>About</Link>

        </header>
    )
}


const headerStyle ={
    background:'#333',
    textAlign:'center',
    color:'#fff',
    padding:'6px'
};

const linkStyle={
    color:"#fff"
}
export default Header;
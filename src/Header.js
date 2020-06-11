import React, { Component } from 'react';
import background from './img/111.jpg';
import './Header.css';

const myStyle={
backgroundImage: ` url(${background})`,
height:'80vh',
backgroundSize:'cover'
}

class Header extends Component {

render(){
    return(
            <header style={myStyle}>
            <h1>{this.props.title}</h1>
            <p> A free Bootstrap theme by start Bootstrap</p>
    <a href='#button'> {this.props.button}</a>
            </header>
        
    )
}
}
export default Header ;
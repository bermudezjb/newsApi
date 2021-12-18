import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render() {
    return <div className="nav">
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/form">Form</Link></li>
      <li><Link to="/list">List</Link></li>
    </ul>
    </div>;
  }
}

export default Nav;



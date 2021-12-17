import React, { Component } from "react";
import Nav from "../Nav";
import "./Header.css";
import { userContext } from "../../context/userContext";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <userContext.Consumer>
          {
            /*
                    value => <>
                                <h3>Hola {value.user.name}</h3>
                                <button onClick={value.logout}>Logout</button>
                             </> 
                             */
            ({ user, logOut }) =>
              user.name ? (
                <>
                  <h3>Hola {user.name}</h3>
                  <button onClick={logOut}>Logout</button>
                </> // forma pro
              ) : (
                ""
              ) //--> else
          }
        </userContext.Consumer>
      </header>
    );
  }
}

export default Header;

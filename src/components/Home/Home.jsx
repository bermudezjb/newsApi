import React, { Component } from "react";
import { userContext } from "../../context/userContext";
import "./Home.css";

class Home extends Component {
  static contextType = userContext; // Adhiere el contexto deseado a la clase

  constructor(props) {
    super(props);
    this.name = React.createRef(); // crear la referencia
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.name.current.value; // por referencia
    this.setState({ name });

    // Consumir contexto. Sólo necesito Login y Logout
    const { Login } = this.context;
    // Invocar a Login enviador por provider. Cambia contexto
    Login(name);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="label">Nombre:</label>
          <br />
          <input type="text" id="name" name="name" ref={this.name} />
          <br />
          <input className="button" type="submit" />
        </form>
      </div>
    );
  }
}

export default Home;

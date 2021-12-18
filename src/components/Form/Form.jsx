import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { redireccion: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const display_title = event.target.title.value;
    const byline = event.target.director.value;
    const summary_short = event.target.date.value;
    const publication_date = event.target.review.value;

    this.props.formulario(
      display_title,
      byline,
      summary_short,
      publication_date
    );
    this.setState({ redireccion: true });
  };

  render() {
    if (this.state.redireccion) {
      return <Navigate to="/list" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br />
          <input type="text" id="title" name="title" />
          <br />
          <label htmlFor="director">Director:</label>
          <br />
          <input type="text" id="director" name="director" />
          <br />
          <label htmlFor="date">Estreno:</label>
          <br />
          <input type="text" id="date" name="date" />
          <br />
          <label htmlFor="review">Resumen:</label>
          <br />
          <input type="text" id="review" name="review" />
          <br />
          <button className="button">Add news</button>
        </form>
      </div>
    );
  }
}

export default Form;

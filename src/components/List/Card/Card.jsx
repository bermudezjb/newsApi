import "./Card.css";
import React, { Component } from "react";
export class Card extends Component {
  render() {
    const { display_title, byline, publication_date } = this.props.info;
    return (
      <div className="cards">
        <div className="div_card">
          <h2>{display_title}</h2>
          <p>{byline}</p>
          <h6>{publication_date}</h6>
          <button onClick={this.props.deleteNew}> Borrar</button>
        </div>
      </div>
    );
  }
}
export default Card;

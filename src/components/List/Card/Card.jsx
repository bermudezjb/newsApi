import "./Card.css";
import React, { Component } from "react";
export class Card extends Component {
  render() {
    const { display_title, byline, summary_short, publication_date } =
      this.props.info;
    return (
      <div className="cards">
        <div className="div_card">
          <h2>{display_title}</h2>
          <p>{byline}</p>
          <h5>{summary_short}</h5>
          <h6>{publication_date}</h6>
          <button className="button" onClick={this.props.delete}> Borrar</button>
        </div>
      </div>
    );
  }
}
export default Card;

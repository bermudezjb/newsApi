import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  paintNews = () => {
    return this.props.listado.map((card, i) => (
      <Card info={card} delete={() => this.props.borrado(i)} key={i} />
    ));
  };

  render() {
    return <div>{this.paintNews()}</div>;
  }
}

export default List;

import React, { Component } from "react";

class Form extends Component {
  render() {
    return <div>
      <form>
        <label htmlFor="title">Title:</label><br />
        <input type="text" id="title" name="title" /><br />
        <label htmlFor="director">Director:</label><br />
        <input type="text" id="director" name="director" /><br />
        <label htmlFor="date">Estreno:</label><br />
        <input type="text" id="date" name="date" /><br />
        <label htmlFor="review">Resumen:</label><br />
        <input type="text" id="review" name="review" /><br />
        <input type="submit" />
    </form>     
      
      </div>;
  }
}

export default Form;

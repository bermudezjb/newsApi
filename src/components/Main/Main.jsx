import React, { Component } from "react";
import Home from "../Home";
import Form from "../Form";
import List from "../List";

import { Route, Routes } from "react-router-dom";

class Main extends Component {
  constructor(props){
    super(props)
    this.state = { formNews:[]}
  }

  createNews = (display_title, byline, summary_short, publication_date)=>{
    const new2 = {display_title, byline, summary_short, publication_date}
    this.setState({formNews:[...this.state.formNews,new2 ] })
  }
  
  render() {
    return (
      <main>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/form" element={<Form formulario ={this.createNews} />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    );
  }
}

export default Main;

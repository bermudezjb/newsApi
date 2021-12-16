import React, { Component } from "react";
import Home from "../Home";
import Form from "../Form";
import List from "../List";

import { Route, Routes } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    );
  }
}

export default Main;

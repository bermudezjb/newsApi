import React, { Component } from "react";
import Home from "../Home";
import Form from "../Form";
import List from "../List";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { formNews: [] };
  }

  async componentDidMount() {
    try {
      const news = await axios.get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=XKfdUqvB6EPaHsMnthYuY68Z9G6QUpSS"
      );
      const data = news.data.results;
      const newsArray = data.concat(this.state.formNews);
      this.setState({ formNews: newsArray });
    } catch (e) {
      console.log("error");
    }
  }

  createNews = (display_title, byline, summary_short, publication_date) => {
    const new2 = { display_title, byline, summary_short, publication_date };
    this.setState({ formNews: [...this.state.formNews, new2] });
  };

  deleteNew = (i) => {
    const card = this.state.formNews.filter((card, j) => j !== i);
    this.setState({ formNews: card });
  };

  render() {
    return (
      <main>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/form" element={<Form formulario={this.createNews} />} />
          <Route
            path="/list"
            element={
              <List listado={this.state.formNews} borrado={this.deleteNew} />
            }
          />
        </Routes>
      </main>
    );
  }
}

export default Main;

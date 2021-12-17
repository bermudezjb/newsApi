import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allNews: [],
    };
  }

  async componentDidMount(){
  try{
    const news = await axios.get(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=XKfdUqvB6EPaHsMnthYuY68Z9G6QUpSS"
    );
    const data = news.data.results;
    console.log(data);
    this.setState({ allNews: data });
  } catch (e){
    console.log("error")
  }
  
  }

  paintNews = () => {
    return this.state.allNews.map((card, i) => (
      <Card info={card} delete={() => this.deleteNew(i)} key={i} />
    ));
  };

  deleteNew = (i) => {
    const card = this.state.allNews.filter((card, j) => j !== i);
    this.setState({ allNews: card });
  };

  render() {
    return <div>{this.paintNews()}</div>;
  }
}

export default List;

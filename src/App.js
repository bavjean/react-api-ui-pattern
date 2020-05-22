import React, { Component } from "react";
import Header from "./Header";
import Accordion from "./Accordion";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
    };
  }

  componentDidMount() {
    let url =
      "https://api.openbrewerydb.org/breweries?by_state=District_of_Columbia";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ breweries: data });
      });
  }

  toggle = (evt) => {
    evt.target.nextSibling.classList.toggle("hide");
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          {this.state.breweries.map((brewery) => (
            <Accordion
              toggle={this.toggle}
              key={brewery.id}
              brewery={brewery}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;

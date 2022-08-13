import React, { Component } from "react";
import CardList from "./components/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      previousPage: "",
      nextPage: "",
    };
  }

  performApiRequest(URL) {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          people: data.results,
          previousPage: data.previous ? data.previous : "",
          nextPage: data.next ? data.next : "",
        }));
      });
  }

  componentDidMount() {
    this.performApiRequest("https://swapi.py4e.com/api/people/");
  }

  pageChange(URL) {
    if (URL) {
      this.performApiRequest(URL);
    }
  }

  render() {
    const { people, previousPage, nextPage } = this.state;
    return (
      <div>
        <h1 className="tc pa2 f1">The Star Wars API</h1>
        <hr></hr>
        <CardList people={people} />
        <div className="tc">
          {previousPage ? (
            <button
              className="white b pv2 ph3 bg-gray hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2 ma2"
              onClick={() => {
                this.pageChange(previousPage);
              }}
            >
              Previous Page
            </button>
          ) : null}
          {nextPage ? (
            <button
              className="white b pv2 ph3 bg-gray hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2 ma2"
              onClick={() => {
                this.pageChange(nextPage);
              }}
            >
              Next Page
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

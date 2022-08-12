import React, { Component } from "react";
import CardList from "./components/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch(`https://swapi.py4e.com/api/people/`)
      .then((response) => response.json())
      .then((people) => this.setState({ people: people.results }));
  }

  render() {
    const { people } = this.state;

    return (
      <div>
        <h1 className="tc pa2 f1">The Star Wars API</h1>
        <hr></hr>
        <CardList people={people} />
      </div>
    );
  }
}

export default App;

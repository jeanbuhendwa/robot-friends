import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc mh4">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
          </filter>
        </svg>
        <span filter-content="S">Robots Friends</span>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}

export default App;

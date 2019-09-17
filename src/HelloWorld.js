import React from "react";
import Bomb from "./Bomb";
import RouletteGun from "./RouletteGun";
class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      who: "world"
    };
  }

  render() {
    return (
      <div>
        <p>Hello ,{this.state.who}</p>
        <button onClick={() => this.setState({ who: "world" })}>World</button>
        <button onClick={() => this.setState({ who: "friend" })}>Friend</button>
        <button onClick={() => this.setState({ who: "react" })}>React</button>
        <Bomb />
        <RouletteGun />
      </div>
    );
  }
}

export default HelloWorld;

import React from "react";

class Bomb extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  bombDisplay() {
    if (this.state.count >= 8) {
      clearInterval(this.interval);
      return "BOOM!!!!";
    } else if (this.state.count % 2 === 0) {
      return "tick";
    } else {
      return "tock";
    }
  }

  render() {
    return (
      <div>
        <p>{this.bombDisplay()}</p>
      </div>
    );
  }
}
export default Bomb;

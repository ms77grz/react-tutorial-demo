import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };
  }

  clickHandler = () => {
    this.setState({
      message: 'Good Buy',
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;

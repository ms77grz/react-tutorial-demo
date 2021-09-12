import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };

    this.authHandler = this.authHandler.bind(this);
  }

  authHandler() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>;
  }
}

export default UserGreeting;

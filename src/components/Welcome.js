import { Component } from 'react';

export default class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;

    return (
      <h2>
        Welcome, {name} a.k.a. {heroName}
      </h2>
    );
  }
}

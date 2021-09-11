import { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <h2>
        Welcome, {this.props.name} a.k.a. {this.props.heroName}
      </h2>
    );
  }
}

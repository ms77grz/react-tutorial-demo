import React, { Component, PureComponent } from 'react';
import RegularComponent from './RegularComponent';
import PureComponentExample from './PureComponentExample';

class RegularParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vishwas',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Vishwas',
      });
    }, 2000);
  }

  render() {
    console.log('*********** Parent Component Render ***********');
    return (
      <div>
        Regular Parent Component
        <RegularComponent name={this.state.name} />
        <PureComponentExample name={this.state.name} />
      </div>
    );
  }
}

export default RegularParentComponent;

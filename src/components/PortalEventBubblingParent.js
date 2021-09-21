import React, { Component } from 'react';
import PortalEventBubblingChild from './PortalEventBubblingChild';
import Modal from './Modal';

class PortalEventBubblingParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ clicks: prevState.clicks + 1 }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Modal>
          <PortalEventBubblingChild />
        </Modal>
      </div>
    );
  }
}

export default PortalEventBubblingParent;

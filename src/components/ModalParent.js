import React, { Component } from 'react';
import ModalChild from './ModalChild';

class ModalParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleShowMessageClick = () => this.setState({ showModal: true });

  handleCloseModal = () => this.setState({ showModal: false });

  render() {
    return (
      <div
        style={{
          marginTop: '30vh',
          height: '100%',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: 'relative',
          }}
        >
          <h1>My App</h1>
          <p>
            This is an example of how you might use React.createPortal. I think
            it is a pretty neat API that is yet another awesome escape hatch
            that React provides for practical reasons. Sometimes you just need
            to render something completely outside the React Tree.
          </p>
          <button onClick={this.handleShowMessageClick}>
            Show Secret Modal
          </button>
          {this.state.showModal ? (
            <ModalChild onClose={this.handleCloseModal}>
              This is the secret modal message!
            </ModalChild>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ModalParent;

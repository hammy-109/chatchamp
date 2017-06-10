import React, { Component } from 'react';
import '../css/App.css';

class MessagesItem extends Component {

  render() {
    console.log(this.props);
    return (
      <div
        className={
          this.props.messageObj.send === 0 ? 'message-body-messages send' : 'message-body-messages receive'
        }
      >
        {this.props.messageObj.message}
      </div>
    );
  }
}

export default MessagesItem;

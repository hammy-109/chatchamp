import React, { Component } from 'react';
import moment from 'moment';
import '../css/App.css';

class MessagesItem extends Component {

  render() {
    console.log(this.props);
    return (
      <div
        className={
          this.props.messageObj.send === 0 ? 'send' : 'receive'
        }
      >
        <div
          className='message-body-message-text' id='send'
        >
        {this.props.messageObj.message}
        </div>
        <div >
          {moment(this.props.messageObj.time).format('LLLL')}
        </div>
      </div>
    );
  }
}

export default MessagesItem;

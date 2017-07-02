import React, { Component } from 'react';
import * as firebase from 'firebase';
import { allInbox } from '../firebase';

import '../css/App.css';

class InputMessage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ''
    };
  }
  sendMessage = (e) => {
    const message = e.target.value.toString();
    if (message !== '' && e.key && e.key.toString() === 'Enter') {
        allInbox.child(this.props.selectedUser.uniqueKey)
        .child('inbox').child(this.props.user.uniqueKey)
        .child('messages').push({
          message: message,
          send: 1,
          read: 0,
          time: firebase.database.ServerValue.TIMESTAMP
        });
        allInbox.child(this.props.selectedUser.uniqueKey)
        .child('inbox').child(this.props.user.uniqueKey)
        .child('time').set(firebase.database.ServerValue.TIMESTAMP);

        allInbox.child(this.props.selectedUser.uniqueKey)
        .child('inbox').child(this.props.user.uniqueKey)
        .child('selectedUser').set(this.props.user);

        allInbox.child(this.props.user.uniqueKey)
        .child('inbox').child(this.props.selectedUser.uniqueKey)
        .child('messages').push({
          message: message,
          send: 0,
          read: 1,
          time: firebase.database.ServerValue.TIMESTAMP
        });
        allInbox.child(this.props.user.uniqueKey)
        .child('inbox').child(this.props.selectedUser.uniqueKey)
        .child('time').set(firebase.database.ServerValue.TIMESTAMP);

        allInbox.child(this.props.user.uniqueKey)
        .child('inbox').child(this.props.selectedUser.uniqueKey)
        .child('selectedUser').set(this.props.selectedUser);
        this.refs.messageText.value = '';
    }
  }
  render() {
    return (
      <div className='message-input'>
        <input
          type="text"
          ref="messageText"
          rows="4"
          cols="50"
          autoFocus
          placeholder='Write your message here ...'
          onChange={this.sendMessage}
          onKeyPress={this.sendMessage}
        />
      </div>
    );
  }
}
export default InputMessage;

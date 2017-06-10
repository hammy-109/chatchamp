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
  sendMessage = () => {
    allInbox.child(this.props.selectedUser.uniqueKey)
    .child('inbox').child(this.props.user.uniqueKey)
    .child('messages').push({
      message: this.state.message,
      send: 1,
      time: firebase.database.ServerValue.TIMESTAMP
    });

    allInbox.child(this.props.selectedUser.uniqueKey)
    .child('inbox').child(this.props.user.uniqueKey)
    .child('selectedUser').set(this.props.user);

    allInbox.child(this.props.user.uniqueKey)
    .child('inbox').child(this.props.selectedUser.uniqueKey)
    .child('messages').push({
      message: this.state.message,
      send: 0,
      time: firebase.database.ServerValue.TIMESTAMP
    });

    allInbox.child(this.props.user.uniqueKey)
    .child('inbox').child(this.props.selectedUser.uniqueKey)
    .child('selectedUser').set(this.props.selectedUser);
    this.props.loadAgain();
    this.refs.messageText.value = '';
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
          onChange={e => this.setState({message: e.target.value})}
        />
        <div>
          <button
            className={
              this.state.message === '' ? 'btn btn-link disable' : 'btn btn-link'
            }
            style={{marginTop: '5px', textDecoration: 'none'}}
            onClick={this.sendMessage}
          >
            SEND
          </button>
        </div>
      </div>
    );
  }
}
export default InputMessage;

import React, { Component } from 'react';
import * as firebase from 'firebase';
import { allInbox } from '../firebase';

import '../css/App.css';

class Message extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ''
    };
  }
  sendMessage = () => {
    console.log(this.props);
    allInbox.child(this.props.selectedUser.uniqueKey).child('inbox').child(this.props.user.uniqueKey).child('messages').push({
      message: this.state.message,
      send: 1,
      time: firebase.database.ServerValue.TIMESTAMP
    });
    allInbox.child(this.props.user.uniqueKey).child('inbox').child(this.props.selectedUser.uniqueKey).child('messages').push({
      message: this.state.message,
      send: 0,
      time: firebase.database.ServerValue.TIMESTAMP
    });
    // console.log(users.child('-KlmYpI32j3WYIUkWO7e').val());
    // console.log(users.child(this.props.selectedUser.uniqueKey));
    // users.on("child_added", function(snapshot, this.props.selectedUser.uniqueKey) {
    //   var newPost = snapshot.val();
    //   console.log("Author: " + newPost.author);
    //   console.log("Title: " + newPost.title);
    //   console.log("Previous Post ID: " + prevChildKey);
    // });
  }
  render() {
    return (
      <div className='message-input'>
        <input
          type="text"
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
export default Message;

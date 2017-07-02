import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allInbox } from '../firebase';
import moment from 'moment';
import '../css/App.css';

class MessagesItem extends Component {
  componentDidMount () {
    console.log(this.props);
    this.props.gobottom();
    if (this.props.messageObj.read === 0) {
      setTimeout(
        () => {
          allInbox.child(this.props.user.uniqueKey)
          .child('inbox').child(this.props.selectedUser.uniqueKey)
          .child('messages').child(this.props.messageObj.key).child('read').set(1);
         },
        5000
      );
    }
  }
  render() {
    return (
      <div
        className={
          this.props.messageObj.send === 0 ? 'send' : 'receive'
        }
      >
        <div
          className='message-body-message-text' id='send'
        >
        {
          this.props.messageObj.read === 0 ?
          <b><em>{this.props.messageObj.message}</em></b> :
          this.props.messageObj.message
        }
        </div>
        <div >
          {moment(this.props.messageObj.time).format('LLLL')}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  let { user, selectedUser } = state;
  return {
    user,
    selectedUser,
  }
}
export default connect(mapStateToProps, null)(MessagesItem);

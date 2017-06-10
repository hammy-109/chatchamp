import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allInbox } from '../firebase';

import InputMessage from './InputMessage';
import MessagesItem from './MessagesItem';
import '../css/App.css';

class Messages extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: undefined,
      loadAgain: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedUser.uniqueKey && nextProps.user.uniqueKey) {
      allInbox.child(nextProps.user.uniqueKey)
      .child('inbox').child(nextProps.selectedUser.uniqueKey)
      .child('messages').on('value', snap => {
        let messages = [];
        snap.forEach(item => {
          const { message, send, time } = item.val();
          messages.push ({
            message,
            send,
            time,
          });
        });
        this.setState({ messages: messages.length > 0 ? messages : '-' });
      });
    }
  }
  loadAgain = () => {
    this.setState({loadAgain: !this.state.loadAgain});
  }
  render() {
    return (
      <div className="messages">
        <div className='message-header'>
          <h4>
            {
              !this.props.showInbox ?
              <div
                style={{float: 'left', cursor: 'pointer'}}
                className="glyphicon glyphicon-menu-right"
                onClick={this.props.toggleInbox}
              >
              </div> : ''
            }
            MESSAGES
            {
              !this.props.showUsers ?
              <div
                style={{float: 'right', cursor: 'pointer'}}
                className="glyphicon glyphicon-menu-left"
                onClick={this.props.toggleUsers}
              >
              </div> : ''
            }
          </h4>
        </div>
        <div className='message-smallheader'>
          { this.props.selectedUser.userName }
        </div>
        {
          this.props.selectedUser.userName ?
          <div>
            <div className='message-body'>
              {
                !this.state.messages ?
                <div className='loader'></div> :
                this.state.messages === '-' ?
                <div className="no-inbox">
                  <div><i className='glyphicon glyphicon-inbox'/></div>
                  <b>NO MESSAGES</b>
                </div> :
                this.state.messages.map((message, key) => {
                  return <MessagesItem key={key} messageObj={message}/>
                })
              }
            </div>
            <div className='message-footer'>
              <InputMessage
                selectedUser={this.props.selectedUser}
                user={this.props.user}
                loadAgain={this.loadAgain}
              />
            </div>
          </div>
          :
            <div className="chat-icon ">
              <div className="icon glyphicon glyphicon-send"></div>
              <div className="chat-icon-text">C<span>hat Cham</span>p</div>
            </div>
        }

      </div>
    );
  }
}
function mapStateToProps (state) {
  const { selectedUser, user } = state;
  return { selectedUser, user };
}
export default connect(mapStateToProps, null)(Messages);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import '../css/App.css';

class Messages extends Component {

  render() {
    console.log(this.props.user);
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
              <div className='message-body-messages'>
                hii skjdbsjdbsjdbvjsbdjvbsjdbvsdsdjvsdjhsldhvsldhvsldkvhsldkvhslkdvhlskd hvlskd hvlkh
              </div>

            </div>
            <div className='message-footer'>
              <Message selectedUser={this.props.selectedUser} user={this.props.user}/>
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

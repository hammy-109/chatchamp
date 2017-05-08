import React, { Component } from 'react';
import '../css/App.css';

class Messages extends Component {
  render() {
    return (
      <div className="messages">
        <div className='message-header'>
          <h4><b>Messages</b></h4>
        </div>
        <div className='message-body'>
          <div className= 'message-body-messages'>
            hii skjdbsjdbsjdbvjsbdjvbsjdbvsdsdjvsdjhsldhvsldhvsldkvhsldkvhslkdvhlskd hvlskd hvlkh
          </div>

        </div>
        <div className='message-footer'>
          <div className='message-input'>
            <textarea
              rows="4"
              cols="50"
              autofocus
              placeholder='Write your message here ...'
            >
            </textarea>
            <div>
              <button className='btn btn-success' style={{marginLeft: '10px'}}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;

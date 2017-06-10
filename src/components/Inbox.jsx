import React, { Component } from 'react';

import InboxItem from './InboxItem';

import '../css/App.css';

class Inbox extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <div className='inbox-header'>
          <h4>
            INBOX
            <div
              style={{float: 'right', cursor: 'pointer'}}
              className="glyphicon glyphicon-menu-left"
              onClick={this.props.toggleInbox}
            >
            </div>
          </h4>
        </div>
        <div className="inbox-body">
          {
            this.props.inbox === 0 ?
            <div className='loader'></div> :
            <div>
              {
                !this.props.inbox ?
                <div className='loader'></div> :
                this.props.inbox === '-' ?
                <div className="no-inbox">
                  <div><i className='glyphicon glyphicon-inbox'/></div>
                  <b>NO INBOX</b>
                </div> :
                this.props.inbox.map((item, key) =>
                  <InboxItem key={key} inbox={item}/>
                )
              }
            </div>
          }
        </div>
      </div>
    );
  }
}
export default Inbox;

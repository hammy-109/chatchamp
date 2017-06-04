import React, { Component } from 'react';
import '../css/App.css';

class Inbox extends Component {
  render() {
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
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        </div>
      </div>
    );
  }
}

export default Inbox;

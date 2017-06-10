import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedUser } from '../actions/index';

import '../css/App.css';

class InboxItem extends Component {

  userSelected = () => {
    this.props.selectedUser(this.props.inbox.selectedUser);
  }
  render() {
    const messagesKeys = Object.keys(this.props.inbox.messages);
    const messageObj = this.props.inbox.messages[messagesKeys[messagesKeys.length-1]];
    return (
      <div className="row userItem" onClick={this.userSelected}>
        <div className="col-sm-3" style={{padding: '0rem', textAlign: 'center'  }}>
          <i style={{fontSize: '40px'}} className="glyphicon glyphicon-user" />
        </div>
        <div className="col-sm-8" >
          <div><b>{this.props.inbox.selectedUser.userName}</b></div>
          <div>{messageObj.message}</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectedUser},dispatch)
}
export default connect(null, mapDispatchToProps)(InboxItem);

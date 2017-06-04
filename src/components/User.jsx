import React, { Component } from 'react';
import '../css/App.css';

class User extends Component {

  render() {
    return (
      <span className="user-name">
        <i style={{fontSize: '16px'}} className="glyphicon glyphicon-user" />&nbsp;&nbsp;
        <b><em>{this.props.user.userName}</em></b>
      </span>
    );
  }
}

export default User;

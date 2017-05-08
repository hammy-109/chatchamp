import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/App.css';

class Users extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div className="users">
        <div className='users-header'>
          <h4><b>USERS</b></h4>
        </div>
        <div className='user-list'>
          {
            this.props.users.map((user, key) => {
              return (
                <div key={key} className='userItem'>
                  <div><b>{user.email}</b></div>
                  <div><em>{user.userName}</em></div>
                </div>
              );
            })
          }
          </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  const { users } = state;
  return { users };
}
export default connect(mapStateToProps, null)(Users);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

import '../css/App.css';

class Users extends Component {
  // shouldComponentUpdate (nextProps, nextState) {
  //   return this.props !== nextProps;
  // }
  render() {
    return (
      <div className="users">
        <div className='users-header'>
          <h4>
            <div
              style={{float: 'left', cursor: 'pointer'}}
              className="glyphicon glyphicon-menu-right"
              onClick={this.props.toggleUsers}
            >
            </div>
            USERS
          </h4>
        </div>
        <div className='user-list'>
          {
            this.props.users.length > 0 ?
            this.props.users.map((user, key) => {
              return (
                <UserItem key={key} user={user} />
              );
            })
            :
            <div className='loader'></div>
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

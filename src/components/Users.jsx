import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

import '../css/App.css';

class Users extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
    };
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ users: nextProps.users });
  }
  searchUsers = (e) => {
    const findText = e.target.value;
    if (findText !== '') {
      const filteredUsers = this.props.users.filter( user => {
        return user.email.includes(findText) || user.userName.includes(findText)
      });
      this.setState({ filteredUsers });
    } else {
      this.setState({ filteredUsers: [] });
    }
  }
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
        <div className='user-search'>
          <div className="input-group input-group-sm">
            <span className="input-group-addon" id="sizing-addon3"><i className='glyphicon glyphicon-search' /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search users.."
              aria-describedby="sizing-addon3"
              onChange={this.searchUsers}
            />
          </div>
        </div>
        <div className='user-list'>
          {
            this.state.users.length > 0 && this.state.filteredUsers.length === 0 ?
            this.state.users.map((user, key) => {
              return (
                <UserItem key={key} user={user} />
              );
            })
            :
            this.state.filteredUsers.length > 0 ?
            this.state.filteredUsers.map((user, key) => {
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

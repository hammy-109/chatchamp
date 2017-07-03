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
      isMatchFlag: 0,
      render: false,
    };
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ users: nextProps.users });
  }
  componentDidMount () {
    this.setState({ users: this.props.users});
  }
  searchUsers = (e) => {
    const findText = e.target.value;
    if (findText !== '') {
      const filteredUsers = this.props.users.filter( user => {
        return user.email.includes(findText) || user.userName.includes(findText)
      });
      this.setState({ filteredUsers });
      if (filteredUsers.length === 0) {
        this.setState({ filteredUsers: [], isMatchFlag: -1 })
      } else {
        this.setState({ filteredUsers, isMatchFlag: 1});
      }
    } else {
      this.setState({ filteredUsers: [], isMatchFlag: 0 });
    }
  }
  render() {
    return (
      <div className="users">
        <div className='user-search'>
          <div className="input-group input-group-sm">
            <span className="input-group-addon" id="sizing-addon3"><i className='glyphicon glyphicon-search' /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Find Friends..."
              aria-describedby="sizing-addon3"
              onChange={this.searchUsers}
            />
          </div>
        </div>
        <div className='user-list'>
          {
            this.state.users.length > 0
            && this.state.filteredUsers.length === 0
            && this.state.isMatchFlag === 0 ?
            this.state.users.map((user, key) => {
              return (
                <div key={key}>
                  <UserItem user={user} />
                </div>
              );
            })
            :
            this.state.filteredUsers.length > 0 ?
            this.state.filteredUsers.map((user, key) => {
              return (
                <div key={key}>
                  <UserItem user={user} />
                </div>
              );
            })
            :
            this.state.filteredUsers.length === 0
            && this.state.isMatchFlag === -1 ?
            <div className="no-inbox-match">
              <div><i className='glyphicon glyphicon-remove-sign'/></div>
              <b>No Match</b>
            </div> :
            <div className='loader'></div>
          }
          </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  const { users } = state;
  console.log(users);
  return { users };
}
export default connect(mapStateToProps, null)(Users);

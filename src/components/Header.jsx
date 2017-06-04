import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import User from './User';
import '../css/App.css';

class Header extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="row header">
      {
        this.props.user ?
          <div>
            <div className="col-sm-4">
              <User user={this.props.user}/>
            </div>
            <div className="col-sm-4">
              <div className="app-head">
                <div className=" glyphicon glyphicon-send"></div>&nbsp;
                Chat Champ
              </div>
            </div>
            <div className="col-sm-4">
              <DropdownButton
                title=""
                id="userMenu"
                pullRight={true}
                noCaret={true}
                className="glyphicon glyphicon-option-vertical">
                <MenuItem
                  id="Profile"
                  onClick={this.props.toggleProfile}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  id="hideinbox"
                  onClick={this.props.toggleInbox}
                >
                  Toggle Inbox
                </MenuItem>
                <MenuItem
                  id="hideinbox"
                  onClick={this.props.toggleUsers}
                >
                  Toggle Users
                </MenuItem>
                <MenuItem
                  className="divider"
                >
                </MenuItem>
                <MenuItem
                  id="signOut"
                  onClick={this.signOut}
                >
                  Log Out
                </MenuItem>
              </DropdownButton>
            </div>
          </div>
        :
          <div className="col-sm-12">
            <div className="app-head">
              <div className=" glyphicon glyphicon-send"></div>&nbsp;
              Chat Champ
            </div>
          </div>
      }
      </div>
    );
  }
}
function mapStateToProps (state) {
  let { user } = state;
  const { users } = state;
  const { email } = user;
  const loginUser = users.filter(user => {
    return user.email === email
  })
  user = loginUser[0];
  return {
    user
  }
}
export default connect(mapStateToProps, null)(Header);

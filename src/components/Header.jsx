import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp, users } from '../firebase';
import * as firebase from 'firebase';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import '../css/App.css';

class Header extends Component {
  signOut = () => {
    console.log(this.props.user.uniqueKey);
    users.child(this.props.user.uniqueKey).child('time').set(firebase.database.ServerValue.TIMESTAMP)
    .then( success => {
      console.log(this.props.user);
      firebaseApp.auth().signOut();
    })
  }
  render() {
    return (
      <div className="row header">
      {
        this.props.user ?
          <div className='inbox-header'>
            <h4>
              <div className=" glyphicon glyphicon-send"></div>&nbsp;
              Chat Champ
              <DropdownButton
                style={{float: 'right'}}
                title=""
                id="userMenu"
                pullRight={true}
                noCaret={true}
                className="glyphicon glyphicon-option-vertical">
                <MenuItem
                  id="Profile"
                  onClick={this.props.showMyProfile}
                >
                  My Profile
                </MenuItem>
                <MenuItem
                  className="divider"
                >
                </MenuItem>
                <MenuItem
                  id="signOut"
                  onClick={this.signOut}
                >
                  Log Out <i style={{ float: 'right'}}className='glyphicon glyphicon-log-out'/>
                </MenuItem>
              </DropdownButton>
            </h4>
          </div>
        : null
      }
      </div>
    );
  }
}
function mapStateToProps (state) {
  let { user } = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(Header);



// <div className="col-sm-4">
//   <div className="app-head">
//     <div className=" glyphicon glyphicon-send"></div>&nbsp;
//     Chat Champ
//   </div>
// </div>

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Users from './Users';
import Messages from './Messages';
import Inbox from './Inbox';
import '../css/App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showInbox: true,
      showUsers: true,
      showProfile: false,
    }
  }
  toggleInbox = () => {
    this.setState({ showInbox: !this.state.showInbox});
  }
  toggleProfile = () => {
    this.setState({ showProfile: !this.state.showProfile});
  }
  toggleUsers = () => {
    this.setState({ showUsers: !this.state.showUsers});
  }
  render() {
    return (
      <div className="App">
        <Header
          toggleInbox={this.toggleInbox}
          toggleUsers={this.toggleUsers}
          toggleProfile={this.toggleProfile}
        />
        <div className="App-body">
          <div className='row'>
            <div
              className={
                this.state.showInbox && this.state.showUsers ? 'col col-sm-3 nopadd' :
                this.state.showInbox && !this.state.showUsers ? 'col col-sm-4 nopadd' :
                'hide-display'
              }
            >
              <Inbox
                toggleInbox={this.toggleInbox}
              />
            </div>
            <div
              className={
                this.state.showInbox && this.state.showUsers ? 'col col-sm-6 border-lr' :
                this.state.showInbox || this.state.showUsers ? 'col col-sm-8 border-lr' :
                'col col-sm-12 border-lr'
              }
            >
              <Messages
                showInbox={this.state.showInbox}
                showUsers={this.state.showUsers}
                toggleInbox={this.toggleInbox}
                toggleUsers={this.toggleUsers}
              />
            </div>
            <div
              className={
                this.state.showInbox && this.state.showUsers ? 'col col-sm-3 nopadd' :
                !this.state.showInbox && this.state.showUsers ? 'col col-sm-4 nopadd' :
                'hide-display'
              }
            >
              <Users
                toggleUsers={this.toggleUsers}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, null)(App);

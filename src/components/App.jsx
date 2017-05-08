import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Users from './Users';
import Messages from './Messages';
import Inbox from './Inbox';
import '../css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <div className='row'>
          </div>
          <div className='row'>
            <div className='col col-sm-3 nopadd'>
              <Inbox />
            </div>
            <div className='col col-sm-6 border-lr'>
              <Messages />
            </div>
            <div className='col col-sm-3 nopadd'>
              <Users />
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

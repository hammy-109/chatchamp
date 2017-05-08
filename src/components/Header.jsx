import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

import User from './User';
import '../css/App.css';

class Header extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="row header">
        <div  className=' col-sm-8'>
          <h4> <b>ChatChamp</b></h4>
        </div>
        <div  className=' col-sm-4'>
          <div   className='' style={{display: 'inline'}}>
            <button style={{float:'right'}} className='btn btn-success' onClick={this.signOut}>SignOut</button>
            <User />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

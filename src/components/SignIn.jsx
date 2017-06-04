import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

import '../css/App.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signIn = () => {
    const { email, password } = this.state;

    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }
  render () {
    return (
      <div className='form-inline col-sm-4' style={{margin: '5%'}}>
        <div className='form-group'>
          <h2>Sign In</h2>
          <input
            style={{width: '100%', marginTop: '10px'}}
            className='form-control'
            type='text'
            placeholder='email'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{width: '100%', marginTop: '10px'}}
            className='form-control'
            type='password'
            placeholder='password'
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            style={{width: '100%', marginTop: '10px'}}
            onClick={this.signIn}
            className='btn btn-primary'>
            Sign In
          </button>
          <div style={{ marginTop: '10px'}}>{this.state.error.message}</div>
          <div><Link to={'/signup'}>Sign up</Link></div>
        </div>
      </div>
    );
  }
};

export default SignIn;

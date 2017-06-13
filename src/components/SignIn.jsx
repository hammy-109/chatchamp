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
      <div className='' style={{padding: '1rem'}}>
        <div className='form-group'>
          <div className="chat-icon " style={{marginTop: '0px'}}>
            <div className="icon glyphicon glyphicon-send"></div>
            <div className="chat-icon-text">C<span>hat Cham</span>p</div>
          </div>
          <h2>Sign In</h2>
          <input
            style={{width: '100%', marginTop: '10px'}}
            className='form-control'
            type='text'
            placeholder='Email'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{width: '100%', marginTop: '10px'}}
            className='form-control'
            type='password'
            placeholder='Password'
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            style={{width: '100%', marginTop: '10px'}}
            onClick={this.signIn}
            className='btn btn-primary'>
            Sign In
          </button>
          <div style={{ marginTop: '10px'}}>{this.state.error.message}</div>
          <div><Link to={'/chatChamp/signup'}>Sign up</Link></div>
        </div>
      </div>
    );
  }
};

export default SignIn;

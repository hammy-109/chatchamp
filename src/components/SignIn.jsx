import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

import '../css/App.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signingIn: false,
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signIn = () => {
    const { email, password } = this.state;
    this.setState({ signingIn: true })
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error, signingIn: false});
      })
  }
  render () {
    return (
      <div className='' style={{padding: '1rem'}}>
        <div className="chat-icon " style={{marginTop: '0px'}}>
          <div className="icon glyphicon glyphicon-send"></div>
          <div className="chat-icon-text">C<span>hat Cham</span>p</div>
        </div>
        <br />
        <div className='form-group'>
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
            className={
              this.state.signingIn ? 'btn btn-primary disabled' : 'btn btn-primary'
            }>
            {
              this.state.signingIn ? 'Signing in' : 'Sign in'
            }
            &nbsp;&nbsp;
            <i
              className={
                this.state.signingIn ? 'glyphicon glyphicon-log-in ' : ''
              }/>
          </button>
          <div style={{ marginTop: '10px'}}>{this.state.error.message}</div>
          <div><Link to={'/chatChamp/signup'}>Sign up</Link></div>
        </div>
      </div>
    );
  }
};

export default SignIn;

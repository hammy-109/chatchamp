import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp, users } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp = () => {
    const { email, password, userName } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(success => {
        users.push({email, password, userName})
      })
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }
  render () {
    return (
      <div className='form-inline' style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className='form-group'>
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Email'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='text'
            placeholder='Username'
            onChange={event => this.setState({userName: event.target.value})}
          />
          <input
            style={{marginRight: '5px', marginTop: '5px'}}
            className='form-control'
            type='password'
            placeholder='Password'
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            style={{marginRight: '5px', marginTop: '5px'}}
            onClick={this.signUp}
            className='btn btn-primary'>
            Sign Up
          </button>
          <div>{this.state.error.message}</div>
          <div><Link to={'/signin'}>Sign In</Link></div>
        </div>
      </div>
    );
  }
};

export default SignUp;
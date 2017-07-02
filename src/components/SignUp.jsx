import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp, users } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signingUp: false,
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
    this.setState({ signingUp: true })
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(success => {
        users.push({email, userName, photoUrl: '', time: ''})
      })
      .catch(error => {
        console.log('error', error);
        this.setState({error, signingUp: false});
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
        <h2>Sign Up</h2>
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
            type='text'
            placeholder='Username'
            onChange={event => this.setState({userName: event.target.value})}
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
            onClick={this.signUp}
            className={
              this.state.signingUp ? 'btn btn-primary disabled' : 'btn btn-primary'
            }>
            {
              this.state.signingUp ? 'Signing up' : 'Sign up'
            }
            &nbsp;&nbsp;
            <i
              className={
                this.state.signingUp ? 'glyphicon glyphicon-log-in ' : ''
              }/>
          </button>
          <div style={{ marginTop: '10px'}}>{this.state.error.message}</div>
          <div><Link to={'/chatChamp/signin'}>Sign In</Link></div>
        </div>
      </div>
    );
  }
};

export default SignUp;

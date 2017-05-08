import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        userName: ''
      }
    }
  }
  componentWillReceiveProps (nextProps) {
    const { user } = nextProps;
    this.setState({user});
  }

  render() {
    console.log(this.props.user);
    return (
      <span className="" style={{float: 'right', padding: '2%'}}>
        <b><em>{this.state.user.userName}</em></b>
      </span>
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
export default connect(mapStateToProps, null)(User);

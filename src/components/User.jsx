import React, { Component } from 'react';

import '../css/App.css';

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      updateTime: true
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.user.uniqueKey && this.state.updateTime) {
      this.props.updateTime(nextProps.user.uniqueKey);
      this.setState({updateTime: false});
    }
  }
  render() {
    return (
      <span>
      </span>
    );
  }
}

export default User;

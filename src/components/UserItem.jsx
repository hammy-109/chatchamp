import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedUser } from '../actions/index';

import '../css/App.css';

class userItem extends Component {
  userSelected = () => {
    this.props.selectedUser(this.props.user);
  }
  render() {
    return (
      <div className="row userItem" onClick={this.userSelected}>
        <div className="col-sm-3" style={{padding: '0rem', textAlign: 'center'  }}>
          <i style={{fontSize: '40px', color: '#ddd'}} className="glyphicon glyphicon-user" />
        </div>
        <div className="col-sm-8" >
          <div><b>{this.props.user.email}</b></div>
          <div><em>{this.props.user.userName}</em></div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectedUser},dispatch)
}
export default connect(null, mapDispatchToProps)(userItem);


// <img src="cinqueterre.jpg" class="img-rounded" alt="Cinque Terre" width="50" height="50" />

import React, { Component } from 'react';

import InboxItem from './InboxItem';

import '../css/App.css';

class Inbox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inbox: [],
      filteredInbox: [],
      isMatchFlag: 0,
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ inbox: nextProps.inbox });
  }
  searchInbox = (e) => {
    const findText = e.target.value;
    if (findText !== '') {
      const filteredInbox = this.state.inbox.filter( inbox => {
        return inbox.selectedUser.userName.includes(findText)
      });
      if (filteredInbox.length === 0) {
        this.setState({ filteredInbox: [], isMatchFlag: -1 })
      } else {
        this.setState({ filteredInbox, isMatchFlag: 1});
      }
    } else {
      this.setState({ filteredInbox: [], isMatchFlag: 0});
    }
  }
  render() {
    return (
      <div>
        <div className='inbox-search'>
          <div className="input-group input-group-sm">
            <span className="input-group-addon" id="sizing-addon3"><i className='glyphicon glyphicon-search' /></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search inbox.."
              aria-describedby="sizing-addon3"
              onChange={this.searchInbox}
              ref="inboxSearch"
            />
          </div>
        </div>
        <div className="inbox-body">
          {
            !this.props.inbox ?
            <div className='loader'></div> :
            <div>
              {
                this.state.isMatchFlag === -1
                && this.props.inbox
                && this.state.filteredInbox.length === 0 ?
                <div className="no-inbox-match">
                  <div><i className='glyphicon glyphicon-remove-sign'/></div>
                  <b>No Match</b>
                </div> :
                this.props.inbox.length === 0 ?
                <div className="no-inbox">
                  <div><i className='glyphicon glyphicon-inbox'/></div>
                  <b>NO INBOX</b>
                </div> :
                this.state.filteredInbox.length > 0
                && this.state.isMatchFlag === 1 ?
                this.state.filteredInbox.map((item, key) =>
                  <InboxItem key={key} inbox={item}/>
                ) :
                this.state.inbox.length > 0
                && this.state.filteredInbox.length === 0
                && this.state.isMatchFlag === 0 ?
                this.state.inbox.map((item, key) =>
                  <InboxItem key={key} inbox={item}/>
                ) :
                  null
              }
            </div>
          }
        </div>
      </div>
    );
  }
}
export default Inbox;

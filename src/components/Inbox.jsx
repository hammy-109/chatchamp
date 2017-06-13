import React, { Component } from 'react';

import InboxItem from './InboxItem';

import '../css/App.css';

class Inbox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inbox: [],
      filteredInbox: [],
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
      this.setState({ filteredInbox });
    } else {
      this.setState({ filteredInbox: [] });
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
            />
          </div>
        </div>
        <div className="inbox-body">
          {
            this.state.inbox === 0 ?
            <div className='loader'></div> :
            <div>
              {
                !this.state.inbox ?
                <div className='loader'></div> :
                this.state.inbox === '-' ?
                <div className="no-inbox">
                  <div><i className='glyphicon glyphicon-inbox'/></div>
                  <b>NO INBOX</b>
                </div> :
                this.state.inbox.length > 0 && this.state.filteredInbox.length === 0 ?
                this.state.inbox.map((item, key) =>
                  <InboxItem key={key} inbox={item}/>
                ) :
                this.state.filteredInbox.map((item, key) =>
                  <InboxItem key={key} inbox={item}/>
                )
              }
            </div>
          }
        </div>
      </div>
    );
  }
}
export default Inbox;

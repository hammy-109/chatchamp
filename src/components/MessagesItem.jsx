import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allInbox } from '../firebase';
import moment from 'moment';

import { selectedUser } from '../actions/index';

import '../css/App.css';

class MessagesItem extends Component {
  componentDidMount () {
    this.props.gobottom();
    if (this.props.messageObj.read === 0) {
      setTimeout(
        () => {
          allInbox.child(this.props.user.uniqueKey)
          .child('inbox').child(this.props.selectedUserObj.uniqueKey)
          .child('messages').child(this.props.messageObj.key).child('read').set(1)
          .then ( () => {
            this.props.selectedUser(this.props.selectedUserObj);
          })
         },
        5000
      );
    }
  }
  render() {
    return (
      <div
        className={
          this.props.messageObj.send === 0 ? 'send' : 'receive'
        }
      >
        {
          this.props.messageObj.send === 1 ?
          <span>
            <img
              alt=""
              style={{backgroundColor: '#0077e5', height: '50px', width: '50px',
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px'}}
              className='img-circle'
              src={
                this.props.selectedUserObj.photoUrl !== '' ? this.props.selectedUserObj.photoUrl :
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAASFBMVEX///9+fX3y8vJwbm53dnZ7enr7+/t0c3OIh4eOjY3n5+f39/eDgoLq6uq/v7/j4+OzsrLT0tLa2tq5ubmhoKCbmprKycmqqalQ56tRAAADQElEQVRoge2a2Y6rMAyGJ4lNCEtYCvT93/RAmdJlgNrUaXWkfHcjof6JtzjO/PxEIpFIJBKJRP4X8rLMqqws8y9oJ1XdOwVgAZTr6yr5qHpVKwOIagYRjKqrj6m3zlylb6Bx7UfUsx7+ql9WAH0WXt7juvrsCB9a/mw21SfMOah67mBXXilwAbNRp9u2X3yQ6mD67rX8uAAXSr57ZfxfF3Rh5P1+6N0wQbIgo+3+YoEQdaCnOH8Ge3n5hr790QCNuD4h9e4MkErLs7YfwAAM718MIBwBCTX3rhjZhqSxTH0r64Azz/yjA0QPwoRU+R/0naQDNFN9QvIYzLjuHwNAsga33PAfE0CyG2WHv3ACDAf0B0H9b+//2/7/dvxrbvkZC5Bk/ucpWz8VvQd07Por2wR7XvsxNiCyPbBmn//CtyDmASh+CRqY/Z9k9ZvImfrit2BWBApH30ReMO4/RYAhAOMMFD37FojX72AX8ETRPIAq0DCy3Bi8PclDGUZ+bAN2Zm+LPAYcQ7YvXYAq6BQ0K/aDEIpwI9BLTifdXhraLlm+FKbsinnCPWyaAIo576uiEw9Bj4A4L0DXuLYCwHo+cyscv5UtwJm7WP1a1/QJzUMuIhg8/Z74c520TjAQ/HXeb/trW1HVDoyFCWvALa8Puv+NDxSbAib9zdyIfiluedn4U33yze0BKLmfzkMvUgf148zbumErvPPBPSQHOIEmrHw+d9Gmp7Xf1afUPn9avJ0H1VrNB+N8e2/cpPXOrCQFwpuvUtXzlpYfBkz72g/N4Os+nf5c/86+tYBsr9yPaX55/4PdUwnfyEPKe8cr3ngP4U+9VhdweBJGbrj2OdqOMa8cOws41I5q/sxhcwFHQoA58d7jyDR84I98tjFsD+hCUF6pguuBWir4ZqBmbl9UfYJnAOHtcw3Afm55DetBhj1ueg1rJCBw7jzDeRKs5M0/OoDeCbBfmyjQX6Q0f9pKgdwItHInzz2WejMWT/4ZcgkQaXv+Qp2JCh89N4iHUBvG/KMDaAFw4LGLBnEsGCj8yAEo2Hg9QmzD2G8tZH1aI95u3PnelqcWoEaZECj6i2iu5fnGf8lGIpFIJBKJRCKP/AMJ7ya7CRKOHgAAAABJRU5ErkJggg==`
              }
            /> &nbsp;&nbsp;
          </span> : ''
        }
        <div
          style={{ display: 'inline-block'}}
          className='message-body-message-text' id='send'
        >
        {
          this.props.messageObj.read === 0 ?
          <b><em>{this.props.messageObj.message}</em></b> :
          this.props.messageObj.message
        }
        </div>
        {
          this.props.messageObj.send === 0 ?
          <span>
            &nbsp;&nbsp;
            <img
              alt=""
              style={{backgroundColor: '#0077e5', height: '50px', width: '50px',
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px'}}
              className='img-circle'
              src={
                this.props.user.photoUrl !== '' ? this.props.user.photoUrl :
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAASFBMVEX///9+fX3y8vJwbm53dnZ7enr7+/t0c3OIh4eOjY3n5+f39/eDgoLq6uq/v7/j4+OzsrLT0tLa2tq5ubmhoKCbmprKycmqqalQ56tRAAADQElEQVRoge2a2Y6rMAyGJ4lNCEtYCvT93/RAmdJlgNrUaXWkfHcjof6JtzjO/PxEIpFIJBKJRP4X8rLMqqws8y9oJ1XdOwVgAZTr6yr5qHpVKwOIagYRjKqrj6m3zlylb6Bx7UfUsx7+ql9WAH0WXt7juvrsCB9a/mw21SfMOah67mBXXilwAbNRp9u2X3yQ6mD67rX8uAAXSr57ZfxfF3Rh5P1+6N0wQbIgo+3+YoEQdaCnOH8Ge3n5hr790QCNuD4h9e4MkErLs7YfwAAM718MIBwBCTX3rhjZhqSxTH0r64Azz/yjA0QPwoRU+R/0naQDNFN9QvIYzLjuHwNAsga33PAfE0CyG2WHv3ACDAf0B0H9b+//2/7/dvxrbvkZC5Bk/ucpWz8VvQd07Por2wR7XvsxNiCyPbBmn//CtyDmASh+CRqY/Z9k9ZvImfrit2BWBApH30ReMO4/RYAhAOMMFD37FojX72AX8ETRPIAq0DCy3Bi8PclDGUZ+bAN2Zm+LPAYcQ7YvXYAq6BQ0K/aDEIpwI9BLTifdXhraLlm+FKbsinnCPWyaAIo576uiEw9Bj4A4L0DXuLYCwHo+cyscv5UtwJm7WP1a1/QJzUMuIhg8/Z74c520TjAQ/HXeb/trW1HVDoyFCWvALa8Puv+NDxSbAib9zdyIfiluedn4U33yze0BKLmfzkMvUgf148zbumErvPPBPSQHOIEmrHw+d9Gmp7Xf1afUPn9avJ0H1VrNB+N8e2/cpPXOrCQFwpuvUtXzlpYfBkz72g/N4Os+nf5c/86+tYBsr9yPaX55/4PdUwnfyEPKe8cr3ngP4U+9VhdweBJGbrj2OdqOMa8cOws41I5q/sxhcwFHQoA58d7jyDR84I98tjFsD+hCUF6pguuBWir4ZqBmbl9UfYJnAOHtcw3Afm55DetBhj1ueg1rJCBw7jzDeRKs5M0/OoDeCbBfmyjQX6Q0f9pKgdwItHInzz2WejMWT/4ZcgkQaXv+Qp2JCh89N4iHUBvG/KMDaAFw4LGLBnEsGCj8yAEo2Hg9QmzD2G8tZH1aI95u3PnelqcWoEaZECj6i2iu5fnGf8lGIpFIJBKJRCKP/AMJ7ya7CRKOHgAAAABJRU5ErkJggg==`
              }
            />
          </span> : ''
        }
        <div >
          {moment(this.props.messageObj.time).format('LLLL')}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  let { user, selectedUser } = state;
  const selectedUserObj = selectedUser;
  return {
    user,
    selectedUserObj,
  }
}
export default connect(mapStateToProps, {selectedUser})(MessagesItem);

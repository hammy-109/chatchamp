import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  nopadd: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'App-body': {
    // text-align: center;
    padding: [{ unit: 'px', value: 0 }, { unit: '%H', value: 0.01 }, { unit: 'px', value: 0 }, { unit: '%H', value: 0.01 }]
  },
  header: {
    // background-color: #3b5998;
    backgroundColor: '#ddd',
    color: '#666',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0 }]
  },
  'border-lr': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    borderLeft: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }],
    borderRight: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }]
  },
  users: {
  },
  userItem: {
    padding: [{ unit: '%V', value: 0.03 }, { unit: '%H', value: 0.03 }, { unit: '%V', value: 0.03 }, { unit: '%H', value: 0.03 }],
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#eee' }],
    cursor: 'pointer'
  },
  'userItem:hover': {
    backgroundColor: '#eee'
  },
  'users-header': {
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    textAlign: 'center',
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    color: '#666',
    backgroundColor: '#eee'
  },
  'user-list': {
    overflowY: 'auto',
    height: [{ unit: 'px', value: 470 }]
  },
  messages: {
    height: [{ unit: 'px', value: 550 }]
  },
  'message-header': {
    padding: [{ unit: '%V', value: 0.005 }, { unit: '%H', value: 0.005 }, { unit: '%V', value: 0.005 }, { unit: '%H', value: 0.005 }],
    textAlign: 'center',
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    color: '#666',
    backgroundColor: '#eee'
  },
  'message-input': {
    backgroundColor: '#eee',
    padding: [{ unit: '%V', value: 0.03 }, { unit: '%H', value: 0.03 }, { unit: '%V', value: 0.03 }, { unit: '%H', value: 0.03 }],
    display: 'inline-flex',
    width: [{ unit: '%H', value: 1 }]
  },
  'message-input textarea': {
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    width: [{ unit: '%H', value: 0.9 }],
    outline: 'none',
    borderRadius: '5px',
    maxHeight: [{ unit: 'px', value: 400 }]
  },
  'message-body': {
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    overflowY: 'auto',
    height: [{ unit: 'px', value: 375 }]
  },
  'message-body-messages': {
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    backgroundColor: '#eee',
    borderRadius: '10px',
    width: [{ unit: '%H', value: 0.6 }],
    marginTop: [{ unit: 'px', value: 10 }],
    wordWrap: 'break-word'
  },
  'message-footer': {
    bottom: [{ unit: 'px', value: 0 }],
    position: 'absolute',
    width: [{ unit: '%H', value: 1 }]
  },
  'inbox-header': {
    padding: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    textAlign: 'center',
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ddd' }],
    color: '#666',
    backgroundColor: '#eee'
  }
});

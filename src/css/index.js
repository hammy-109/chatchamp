import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    // padding: 1%;
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    color: '#555',
    overflowY: 'hidden'
  },
  '::-webkit-scrollbar': {
    width: [{ unit: 'px', value: 7 }],
    height: [{ unit: 'px', value: 15 }]
  },
  '::-webkit-scrollbar-track-piece': {
  },
  '::-webkit-scrollbar-thumb:vertical': {
    height: [{ unit: 'px', value: 30 }],
    backgroundColor: '#aaa',
    borderRadius: '10px'
  }
});

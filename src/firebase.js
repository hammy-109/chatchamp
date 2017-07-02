import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDkPPHWBhlmVn1SWCNpsTfh550zwUTsZfI",
  authDomain: "chatchamp-9d74c.firebaseapp.com",
  databaseURL: "https://chatchamp-9d74c.firebaseio.com",
  projectId: "chatchamp-9d74c",
  storageBucket: "chatchamp-9d74c.appspot.com",
  messagingSenderId: "556275324251"
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebase.database().ref('users');
export const allInbox = firebase.database().ref('allInbox');
export const images = firebase.storage().ref('images');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { firebaseApp, users } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer  from './reducers';
import { logUser, usersList } from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './css/index.css';

const browserHistory = createBrowserHistory();
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('cool');
    const { email } = user;
    console.log(user);
    store.dispatch(logUser(email));
    users.on('value', snap => {
      let users= [];
      snap.forEach(user => {
        const { email, userName } = user.val();
        const uniqueKey = user.key;
        users.push({email, userName, uniqueKey});
      })
      // this.props.setGoals(goals);
      store.dispatch(usersList(users));
    });
    browserHistory.push('/app');
  } else {
    console.log('Not cool');
    browserHistory.push('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory}>
      <div>
        <Route path='/app' component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

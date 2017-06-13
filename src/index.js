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
    const { email } = user;
    users.on('value', snap => {
      let userList= [];
      snap.forEach(user => {
        const { email, userName } = user.val();
        const uniqueKey = user.key;
        userList.push({email, userName, uniqueKey});
      });
      store.dispatch(usersList(userList));
      const loginUser = userList.filter(user => {
        return user.email === email
      });
      user = loginUser[0];
      store.dispatch(logUser(user));
      browserHistory.push(`/chatChamp/app/${user.userName}`);
    });
  } else {
    browserHistory.push('/chatChamp/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory}>
      <div>
        <Route path='/chatChamp/app' component={App} />
        <Route path='/chatChamp/signin' component={SignIn} />
        <Route path='/chatChamp/signup' component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import LoginPage from './components/login/loginPage'
import MapPage from './components/map/mapPage'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <AuthExample />
    </Provider>
  );
}

export default App;



function AuthExample() {
  return (
    <Router>
      <div>
        {/* <AuthButton /> */}

        <Switch>
          <Route path="/login">
            <LoginPage1 />
          </Route>

          <PrivateRoute path="/">
            <ProtectedPage />
          </PrivateRoute>

        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : null;
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ProtectedPage() {
  let history = useHistory();
  return <MapPage onSignOut={() => {
    fakeAuth.signout(() => history.push("/"));
  }} />
}

function LoginPage1() {

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    console.log('login')
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <LoginPage onLogin={login} />
  );
}

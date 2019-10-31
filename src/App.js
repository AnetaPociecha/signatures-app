import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './components/login/loginPage'
import MapPage from './components/map/mapPage'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import PrivateRoute from "./components/router/PrivateRoute";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/login" strict exact>
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/" strict exact>
                        <MapPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    </Provider>
  );
}

export default App;

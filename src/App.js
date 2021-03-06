import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from './components/login'
import MapPage from './components/main'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'
import PrivateRoute from "./components/router/PrivateRoute";
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

function App() {
    return (
        <Suspense fallback="loading">
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/login" strict exact>
                                <LoginPage/>
                            </Route>
                            <PrivateRoute path="/" strict exact>
                                <MapPage/>
                            </PrivateRoute>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        </Suspense>
    );
}

export default App;

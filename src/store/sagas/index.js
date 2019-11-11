import auth from './auth/signIn'
import signOut from './auth/signOut'
import {fork, all} from 'redux-saga/effects'
import setUserLocation from "./map/setUserLocation";
import removeUserLocation from "./map/removeUserLocation";

export default function* () {
    yield all([
        fork(auth),
        fork(signOut),
        fork(setUserLocation),
        fork(removeUserLocation)
    ])
}

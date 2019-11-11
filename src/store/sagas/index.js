import auth from './auth/signIn'
import signOut from './auth/signOut'
import {fork, all} from 'redux-saga/effects'
import addUserLocation from "./map/addUserLocation";
import removeUserLocation from "./map/removeUserLocation";

export default function* () {
    yield all([
        fork(auth),
        fork(signOut),
        fork(addUserLocation),
        fork(removeUserLocation)
    ])
}

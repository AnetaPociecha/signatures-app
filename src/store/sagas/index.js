import auth from './auth/signIn'
import signOut from './auth/signOut'
import { fork, all } from 'redux-saga/effects'

export default function*() {
    yield all([fork(auth),fork(signOut)])
}

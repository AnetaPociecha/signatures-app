import auth from './auth'
import { fork, all } from 'redux-saga/effects'

export default function*() {
    yield all([fork(auth)])
  }
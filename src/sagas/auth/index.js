import { AUTH_REQUESTED, AUTH_FAILURE, AUTH_SUCCESS } from "../../types/auth";
import { takeEvery, put } from 'redux-saga/effects'


function* doAuth() {
    console.log('aaaaa')
    yield put({type: AUTH_FAILURE})
    //yield put({type: AUTH_SUCCESS, token: 'as', name:'re', login:'sdsfd'})
}

export default function* watchAuth() {
    yield takeEvery(AUTH_REQUESTED, doAuth)
}
import { AUTH_REQUESTED } from "../../types/auth";
import { takeEvery, put } from 'redux-saga/effects'
import {signIn} from "../../../services/auth";
import {authFailure, authSuccess} from "../../actions/auth";

function* doAuth(action) {
    try {
        const authTO = yield signIn(action.login, action.password);
        yield put(authSuccess(authTO.token, authTO.name, authTO.login));
        yield action.callback();
    } catch (e) {
        yield put(authFailure())
    }
}

export default function* watchAuth() {
    yield takeEvery(AUTH_REQUESTED, doAuth)
}
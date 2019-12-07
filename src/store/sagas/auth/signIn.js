import { AUTH_REQUESTED } from "../../types/auth";
import { takeEvery, put, call } from 'redux-saga/effects'
import {signIn} from "../../../services/auth";
import {authFailure, authSuccess} from "../../actions/auth";
import {fetchGroups} from "../../../services/groups";
import {successFetchingGroups} from "../../actions/group";

function* doAuth(action) {
    try {
        const authTO = yield call(signIn, action.login, action.password);
        yield put(authSuccess(authTO));
        const groupsTO = yield call(fetchGroups, authTO.id);
        yield put(successFetchingGroups(groupsTO));
        yield action.callback();
    } catch (e) {
        yield put(authFailure())
    }
}

export default function* watchAuth() {
    yield takeEvery(AUTH_REQUESTED, doAuth)
}
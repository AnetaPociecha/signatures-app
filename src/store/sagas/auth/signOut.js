import {SING_OUT_REQUESTED} from "../../types/auth";
import { takeEvery, put, select, call } from 'redux-saga/effects'
import {signOut} from "../../../services/auth";
import {signOutSuccess} from "../../actions/auth";
import {selectToken} from "../../selectors";

function* doSignOut(action) {
    try {
        //const token = yield select(selectToken);
        //yield call(signOut, token);
        yield put(signOutSuccess());
        yield action.callback();

    } catch (e) {
        console.log('ERROR IN SIGN OUT SAGA')
    }
}

export default function* watchSignOut() {
    yield takeEvery(SING_OUT_REQUESTED, doSignOut)
}

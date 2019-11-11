import {takeEvery, select, put, call, takeLatest} from "@redux-saga/core/effects";
import {REMOVE_USER_LOCATION_REQUESTED} from "../../types/map";
import {selectToken} from "../../selectors";
import {removeUserLocation} from "../../../services/map";
import {successRemovingUserLocation} from "../../actions/map";


function* doRemoveUserLocation() {

    try {
        const token = yield select(selectToken);
        yield call(removeUserLocation, token);
        yield put(successRemovingUserLocation());

    } catch (e) {
        console.log(e)
    }

}

export default function* watchRemoveUserLocation() {
    yield takeLatest(REMOVE_USER_LOCATION_REQUESTED, doRemoveUserLocation)
}
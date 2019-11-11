import {takeEvery, takeLatest, select, put, call} from "@redux-saga/core/effects";
import {SET_USER_LOCATION_REQUESTED} from "../../types/map";
import {selectToken} from "../../selectors";
import {setUserLocation} from "../../../services/map";
import {successSettingUserLocation} from "../../actions/map";


function* doAddUserLocation(action) {

    try {

        const token = yield select(selectToken);
        const locationObj = yield call(setUserLocation, action.location, token);
        yield put(successSettingUserLocation(locationObj.location));

    } catch (e) {
        console.log(e)
    }

}

export default function* watchAddUserLocation() {
    yield takeLatest(SET_USER_LOCATION_REQUESTED, doAddUserLocation)
}
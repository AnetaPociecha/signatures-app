import {takeLatest, select, put, call} from "@redux-saga/core/effects";
import {SET_USER_LOCATION_REQUESTED} from "../../types/map";
import {selectToken} from "../../selectors";
import {setUserLocation} from "../../../services/map";
import {successSettingUserLocation} from "../../actions/map";

function* doAddUserLocation(action) {

    try {
        const token = yield select(selectToken);
        let locationName = yield call(setUserLocation, action.location, token);
        locationName = `${locationName.charAt(0).toUpperCase()}${locationName.slice(1)}`;
        yield put(successSettingUserLocation(action.location, locationName));

    } catch (e) {
        console.log(e)
    }
}

export default function* watchAddUserLocation() {
    yield takeLatest(SET_USER_LOCATION_REQUESTED, doAddUserLocation)
}
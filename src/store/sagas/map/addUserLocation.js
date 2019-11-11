import {takeEvery, select, put, call} from "@redux-saga/core/effects";
import {ADD_USER_LOCATION_REQUESTED} from "../../types/map";
import {selectToken} from "../../selectors";
import {addUserLocation} from "../../../services/map";
import {successAddingUserLocation} from "../../actions/map";


function* doAddUserLocation(action) {

    try {
        const token = yield select(selectToken);
        const location = yield call(addUserLocation, action.location, token);
        yield put(successAddingUserLocation(location));

    } catch (e) {
        console.log(e)
    }

}

export default function* watchAddUserLocation() {
    yield takeEvery(ADD_USER_LOCATION_REQUESTED, doAddUserLocation)
}
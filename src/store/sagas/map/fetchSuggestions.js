import {put, takeLatest, call} from "@redux-saga/core/effects";
import {FETCH_SUGGESTIONS_REQUESTED} from "../../types/map";
import {fetchSuggestions} from "../../../services/map";
import {successFetchingSuggestions} from "../../actions/map";

function* doFetchSuggestions(action) {

    try {
        const suggestions = yield call(fetchSuggestions, action.latitude, action.longitude);
        yield put(successFetchingSuggestions(suggestions));

    } catch (e) {
        console.log(e)
    }
}

export default function* watchFetchSuggestions() {
    yield takeLatest(FETCH_SUGGESTIONS_REQUESTED, doFetchSuggestions)
}
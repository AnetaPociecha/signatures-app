import {
    ADD_USER_LOCATION_SUCCESS, REMOVE_USER_LOCATION_SUCCESS,
} from "../../types/map";

const initialState = {
    userLocation: undefined,
    colleaguesLocations: [],
    suggestedLocations: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_USER_LOCATION_SUCCESS: {
            return {
                ...state,
                userLocation: action.location
            };
        }

        case REMOVE_USER_LOCATION_SUCCESS: {
            return {
                ...state,
                userLocation: undefined
            }
        }

        default:
            return state
    }
}
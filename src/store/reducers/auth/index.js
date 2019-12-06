import {AUTH_SUCCESS, SING_OUT_SUCCESS, AUTH_FAILURE, CANCEL_AUTH_FAILURE} from "../../types/auth"

const initialState = {
    isAuthenticated: true, // change to false
    authError: false,

    currentLocation: undefined,

    email: '',
    id: undefined,
    fullName: '',
    group: '',
};

export default function(state = initialState, action) {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                currentLocation: action.authTO.currentLocation || undefined,
                email: action.authTO.email,
                fullName: `${action.authTO.name} ${action.authTO.surname}`,
                group: 'AGH', //fix
                authError: false
            };
        case SING_OUT_SUCCESS:
            return {...initialState};
        case AUTH_FAILURE:
            return {
                ...state,
                authError: true
            };
        case CANCEL_AUTH_FAILURE:
            return {
                ...state,
                authError: false
            };
        default:
            return state
    }
}

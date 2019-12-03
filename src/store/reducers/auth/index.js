import {AUTH_SUCCESS, SING_OUT_SUCCESS, AUTH_FAILURE, CANCEL_AUTH_FAILURE} from "../../types/auth"

const initialState = {
    isAuthenticated: true, // change to false
    authError: false,
    token: '', //'test', // remove me
    name: '', //'Jan Kowalski', // and me
    login: '', //'jankowalski@gmail.com', // and me
    group: '', //'agh.edu.pl' // and me
};

export default function(state = initialState, action) {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                name: action.name,
                login: action.login,
                group: action.group,
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

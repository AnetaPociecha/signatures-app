import {AUTH_SUCCESS, SING_OUT_SUCCESS, AUTH_FAILURE, CANCEL_AUTH_FAILURE} from "../../types/auth"

const initialState = {
    isAuthenticated: false,
    authError: false,
    token: '',
    name: '',
    login: ''
};

export default (state = initialState, action) => {

    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                name: action.name,
                login: action.login,
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

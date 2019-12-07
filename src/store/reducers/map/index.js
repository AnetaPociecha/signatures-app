import {
    SET_USER_LOCATION_SUCCESS,
    REMOVE_USER_LOCATION_SUCCESS, SHOW_SUGGESTIONS, HIDE_SUGGESTIONS, FETCH_SUGGESTIONS_SUCCESS,
} from "../../types/map";

const initialState = {
    userLocation: undefined,
// {
//         latlng: [50.062389, 19.938045],
//         name: 'Rynek Główny 41, 31-013 Kraków'
//     },
    suggestions: [],
    showSuggestions: false
};

export default function(state = initialState, action) {

    switch (action.type) {

        case SET_USER_LOCATION_SUCCESS: {
            return {
                ...state,
                userLocation: {
                    latlng: action.latlng,
                    name: action.name
                }
            };
        }

        case REMOVE_USER_LOCATION_SUCCESS: {
            return {
                ...state,
                userLocation: undefined
            }
        }

        case SHOW_SUGGESTIONS: {
            return {
                ...state,
                showSuggestions: true
            }
        }

        case HIDE_SUGGESTIONS: {
            return {
                ...state,
                showSuggestions: false
            }
        }

        case FETCH_SUGGESTIONS_SUCCESS: {
            return {
                ...state,
                suggestions: action.suggestions,
                showSuggestions: true
            }
        }

        default:
            return state
    }
}
import {
    SET_USER_LOCATION_SUCCESS,
    REMOVE_USER_LOCATION_SUCCESS, SHOW_SUGGESTIONS, HIDE_SUGGESTIONS,
} from "../../types/map";

const initialState = {
    userLocation: {
        latlng: [50.062389, 19.938045],
        name: 'Rynek Główny 41, 31-013 Kraków'
    },
    colleagues: [
        {
            name: 'Harry Potter',
            login: 'harrypotter@gmail.com',
            active: true,
            location: [50.061132, 19.938267],
            locationName: 'Rynek Główny 41, 31-013 Kraków'
        },
        {
            name: 'Hermiona Granger',
            login: 'hermionagranger@gmail.com',
            active: true,
            location: [50.061741, 19.936832],
            locationName: 'Rynek Główny 41, 31-013 Kraków'
        },
        {
            name: 'Ron Weasley',
            login: 'ronweasley@gmail.com',
            active: false,
            location: undefined
        },
    ],
    suggestions: [
        {
            location: [50.061430, 19.935885],
            radius: 20
        },
        {
            location: [50.061055, 19.937306],
            radius: 15
        },
        {
            location:[50.061964, 19.938553],
            radius: 20
        },
        {
            location: [50.062379, 19.937052],
            radius: 30
        },
    ],
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

        default:
            return state
    }
}
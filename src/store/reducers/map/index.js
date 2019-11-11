import {
    SET_USER_LOCATION_SUCCESS,
    REMOVE_USER_LOCATION_SUCCESS,
} from "../../types/map";

const initialState = {
    userLocation: [50.062332, 19.938387],
    colleagues: [
        {
            name: 'Harry Potter',
            login: 'harrypotter@gmail.com',
            active: true,
            location: [50.061132, 19.938267]
        },
        {
            name: 'Hermiona Granger',
            login: 'hermionagranger@gmail.com',
            active: true,
            location: [50.061741, 19.936832]
        },
        {
            name: 'Ron Weasley',
            login: 'ronweasley@gmail.com',
            active: false,
            location: undefined
        },
    ],
    suggestedLocations: []
};

export default function(state = initialState, action) {

    switch (action.type) {

        case SET_USER_LOCATION_SUCCESS: {
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
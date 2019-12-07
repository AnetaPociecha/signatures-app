import {CHANGE_GROUP, FETCH_GROUPS_SUCCESS} from "../../types/groups";

const initialState = {
    selectedGroup: undefined,
    allGroups: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_GROUP: {
            return {
                ...state,
                selectedGroup: action.group
            }
        }
        case FETCH_GROUPS_SUCCESS: {
            return {
                selectedGroup: action.groups.length > 0 ? action.groups[0] : undefined,
                allGroups: action.groups
            }
        }
        default:
            return state
    }
}
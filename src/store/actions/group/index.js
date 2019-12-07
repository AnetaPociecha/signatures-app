import {CHANGE_GROUP, FETCH_GROUPS_SUCCESS} from "../../types/groups";

export const changeGroup = group => ({
    type: CHANGE_GROUP,
    group
});

export const successFetchingGroups = groups => ({
    type: FETCH_GROUPS_SUCCESS,
    groups
});
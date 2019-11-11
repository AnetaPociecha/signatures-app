import {
    SET_USER_LOCATION_SUCCESS,
    SET_USER_LOCATION_REQUESTED,
    REMOVE_USER_LOCATION_SUCCESS,
    REMOVE_USER_LOCATION_REQUESTED
} from "../../types/map";

export const requestSettingUserLocation = (location) => ({
    type: SET_USER_LOCATION_REQUESTED,
    location
});

export const successSettingUserLocation = (location) => ({
    type: SET_USER_LOCATION_SUCCESS,
    location
});

export const requestRemovingUserLocation = () => ({
    type: REMOVE_USER_LOCATION_REQUESTED
});

export const successRemovingUserLocation = () => ({
    type: REMOVE_USER_LOCATION_SUCCESS
});

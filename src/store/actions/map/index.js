import {
    ADD_USER_LOCATION_SUCCESS,
    ADD_USER_LOCATION_REQUESTED,
    REMOVE_USER_LOCATION_SUCCESS,
    REMOVE_USER_LOCATION_REQUESTED
} from "../../types/map";

export const requestAddingUserLocation = (location) => ({
    type: ADD_USER_LOCATION_REQUESTED,
    location
});

export const successAddingUserLocation = (location) => ({
    type: ADD_USER_LOCATION_SUCCESS,
    location
});

export const requestRemovingUserLocation = () => ({
    type: REMOVE_USER_LOCATION_REQUESTED
});

export const successRemovingUserLocation = () => ({
    type: REMOVE_USER_LOCATION_SUCCESS
});

import {
    SET_USER_LOCATION_SUCCESS,
    SET_USER_LOCATION_REQUESTED,
    REMOVE_USER_LOCATION_SUCCESS,
    REMOVE_USER_LOCATION_REQUESTED,
    SHOW_SUGGESTIONS,
    HIDE_SUGGESTIONS,
    FETCH_SUGGESTIONS_SUCCESS,
    FETCH_SUGGESTIONS_REQUESTED
} from "../../types/map";

export const requestSettingUserLocation = (location) => ({
    type: SET_USER_LOCATION_REQUESTED,
    location
});

export const successSettingUserLocation = (latlng, name) => ({
    type: SET_USER_LOCATION_SUCCESS,
    latlng,
    name
});

export const requestRemovingUserLocation = () => ({
    type: REMOVE_USER_LOCATION_REQUESTED
});

export const successRemovingUserLocation = () => ({
    type: REMOVE_USER_LOCATION_SUCCESS
});

export const showSuggestions = () => ({
    type: SHOW_SUGGESTIONS
});

export const hideSuggestions = () => ({
    type: HIDE_SUGGESTIONS
});

export const successFetchingSuggestions = (suggestions) => ({
    type: FETCH_SUGGESTIONS_SUCCESS,
    suggestions
});

export const requestFetchingSuggestions = (latitude, longitude) => ({
    type: FETCH_SUGGESTIONS_REQUESTED,
    latitude,
    longitude
});

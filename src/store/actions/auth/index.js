import { AUTH_REQUESTED, SING_OUT_REQUESTED, AUTH_SUCCESS, AUTH_FAILURE, SING_OUT_SUCCESS, CANCEL_AUTH_FAILURE } from "../../types/auth";

export const requestSignIn = (login, password, callback) => ({
    type: AUTH_REQUESTED,
    login,
    password,
    callback
});

export const requestSignOut = (callback) => ({
    type: SING_OUT_REQUESTED,
    callback
});

export const authSuccess = (authTO) => ({
    type: AUTH_SUCCESS,
    authTO
});

export const authFailure = () => ({
    type: AUTH_FAILURE
});

export const signOutSuccess = () => ({
    type: SING_OUT_SUCCESS
});

export const cancelAuthFailure = () => ({
    type: CANCEL_AUTH_FAILURE
});
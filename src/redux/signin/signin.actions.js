import { SignInActionTypes } from "./signin.types";

export const setEmail = email => ({
    type: SignInActionTypes.SET_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: SignInActionTypes.SET_PASSWORD,
    payload: password
});
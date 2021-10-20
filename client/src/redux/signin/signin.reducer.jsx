import { SignInActionTypes } from "./signin.types";

const INITIAL_STATE = {
    email: "",
    password: "",
};

const signinReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignInActionTypes.SET_EMAIL:
            return {
                ...state,
                currentEmail: action.payload,
            };
        case SignInActionTypes.SET_PASSWORD:
            return {
                ...state,
                currentPassword: action.payload,
            };
        default:
            return state;
    }
};

export default signinReducer;

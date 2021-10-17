import { createSelector } from 'reselect';

const selectEmail = state => state.signin;
const selectPassword = state => state.signin;

export const selectCurrentEmail = createSelector(
    [selectEmail],
    (signin) => signin.currentEmail
)


export const selectCurrentPassword = createSelector(
    [selectPassword],
    (signin) => signin.currentPassword
)



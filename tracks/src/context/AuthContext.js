import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
// import { response } from "express";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
         try {
             const response = await trackerApi.post('/signup', { email, password })
             console.log(response.data)
         } catch (error) {
            console.log(error.response.data)
         }
     }
 }

const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out!!;
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignIn: false }
);
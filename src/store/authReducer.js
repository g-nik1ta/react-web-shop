const defaultState = {
    user: {
        id: null,
        name: null,
        surname: null,
        telephone: null,
        email: null,
        photoURL: null,
    }
}

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_EMAIL_USER = 'LOGIN_EMAIL_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const ADD_MORE_USER_INFO = 'ADD_MORE_USER_INFO';

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    photoURL: action.payload.photoURL,
                }
            }
        case LOGIN_EMAIL_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.payload.id,
                    email: action.payload.email,
                }
            }
        case ADD_MORE_USER_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    surname: action.payload.surname,
                    telephone: action.payload.telephone,
                }
            }
        case SIGN_OUT_USER:
            return {
                ...state,
                user: {
                    id: null,
                    name: null,
                    surname: null,
                    telephone: null,
                    email: null,
                    photoURL: null,
                }
            }
        default:
            return state
    }
}

export const loginUserCreator = (payload) => ({ type: LOGIN_USER, payload });
export const loginEmailUserCreator = (payload) => ({ type: LOGIN_EMAIL_USER, payload });
export const signOutUserCreator = (payload) => ({ type: SIGN_OUT_USER, payload });
export const addMoreUserInfo = (payload) => ({ type: ADD_MORE_USER_INFO, payload });
const defaultState = {
    user: {
        id: null,
        accessToken: null,
        name: null,
        email: null,
    }
}

export const LOGIN_USER = 'LOGIN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    accessToken: action.payload.accessToken,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }
        case SIGN_OUT_USER:
            return {
                ...state,
                user: {
                    id: null,
                    accessToken: null,
                    name: null,
                    email: null
                }
            }
        default:
            return state
    }
}

export const loginUserCreator = (payload) => ({ type: LOGIN_USER, payload });
export const signOutUserCreator = (payload) => ({ type: SIGN_OUT_USER, payload });
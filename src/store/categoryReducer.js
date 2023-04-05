const defaultState = {
    category: [],
    currentCategory: null,
    params: {category: null}
}

export const ADD_ALL_CATEGORY = 'ADD_ALL_CATEGORY';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const SET_PARAMS = 'SET_PARAMS';

export default function categoryReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ALL_CATEGORY:
            return {
                ...state,
                category: [
                    ...action.payload
                ]
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case SET_PARAMS:
            return {
                ...state,
                params: action.payload
            }
        default:
            return state;
    }
}

export const addAllCategoryCreator = (payload) => ({ type: ADD_ALL_CATEGORY, payload });
export const setCurrentCategoryCreator = (payload) => ({ type: SET_CURRENT_CATEGORY, payload });
export const setParamsCreator = (payload) => ({ type: SET_PARAMS, payload });
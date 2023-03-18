const defaultState = {
    category: []
}

export const ADD_ALL_CATEGORY = 'ADD_ALL_CATEGORY';

export default function categoryReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ALL_CATEGORY:
            return {
                ...state,
                category: [
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}

export const addAllCategoryCreator = (payload) => ({ type: ADD_ALL_CATEGORY, payload });
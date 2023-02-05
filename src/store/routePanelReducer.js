const defaultState = {
    routeItems: [
        { id: 0, body: 'Главная', path: '/home' },
    ]
}

export const CHANGE_ARR = 'CHANGE_ARR';

export default function catalogReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_ARR:
            const newItems = [{ id: 0, body: 'Главная', path: '/home' }];
            if (action.payload[0].routeItem === 'Главная') {
                return {
                    ...state,
                    routeItems: newItems
                }
            }

            let i = 0;
            for (const element of action.payload) {
                newItems.push({ id: Date.now() + ++i, body: ' › ' });
                newItems.push({ id: Date.now() + ++i, body: element.routeItem, path: element.path});
            }

            return {
                ...state,
                routeItems: newItems
            }
        default:
            return state;
    }
}

export const changeArrCreator = (payload) => ({ type: CHANGE_ARR, payload });
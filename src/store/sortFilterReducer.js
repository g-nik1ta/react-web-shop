const defaultState = {
    priceBorder: {
        minPrice: 0,
        maxPrice: 9999999,
    },
    filterPrice: {
        minValue: 0,
        maxValue: 999
    },
    filterManufacturer: [],
    sort: 'popular',
}

export const SET_PRICE_BORDER = 'SET_PRICE_BORDER';
export const CHANGE_FILTER_PRICE = 'CHANGE_FILTER_PRICE';
export const RESET_PRICE_BORDER = 'RESET_PRICE_BORDER';
export const CHANGE_MANUFACTURER_FILTER = 'CHANGE_MANUFACTURER_FILTER';
export const CHANGE_SORT = 'CHANGE_SORT';
export const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS';

export default function sortFilterReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRICE_BORDER:
            return {
                ...state,
                priceBorder: {
                    minPrice: action.payload.minPrice,
                    maxPrice: action.payload.maxPrice
                },
                filterPrice: {
                    minValue: action.payload.minPrice,
                    maxValue: action.payload.maxPrice
                }
            }
        case CHANGE_FILTER_PRICE:
            return {
                ...state,
                filterPrice: {
                    minValue: action.payload.minValue,
                    maxValue: action.payload.maxValue,
                }
            }
        case RESET_PRICE_BORDER:
            return {
                ...state,
                filterPrice: {
                    minValue: state.priceBorder.minPrice,
                    maxValue: state.priceBorder.maxPrice
                }
            }
        case CHANGE_MANUFACTURER_FILTER:
            return {
                ...state,
                filterManufacturer: action.payload
            }
        case CHANGE_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case RESET_ALL_FILTERS:
            return {
                ...state,
                filterPrice: {
                    minValue: state.priceBorder.minPrice,
                    maxValue: state.priceBorder.maxPrice
                },
                filterManufacturer: []
            }
        default:
            return state
    }
}

export const setPriceBorderCreator = (payload) => ({ type: SET_PRICE_BORDER, payload });
export const changeFilterPriceCreator = (payload) => ({ type: CHANGE_FILTER_PRICE, payload });
export const resetPriceBorderCreator = (payload) => ({ type: RESET_PRICE_BORDER, payload });
export const changeManufacturerFilterCreator = (payload) => ({ type: CHANGE_MANUFACTURER_FILTER, payload });
export const changeSortCreator = (payload) => ({ type: CHANGE_SORT, payload });
export const resetAllFitersCreator = (payload) => ({ type: RESET_ALL_FILTERS, payload });
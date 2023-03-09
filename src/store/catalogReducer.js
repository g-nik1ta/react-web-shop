const defaultState = {
    catalog: []
}

export const ADD_ALL_CATALOG = 'ADD_ALL_CATALOG';
export const CHANGE_URL = 'CHANGE_URL';
export const CHANGE_PRICE = 'CHANGE_PRICE';
export const RESET_DEFAULT = 'RESET_DEFAULT';

export default function catalogReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ALL_CATALOG:
            return {
                ...state,
                catalog: [
                    ...action.payload
                ]
            }
        case CHANGE_URL:
            return {
                ...state,
                catalog: state.catalog.map(
                    product => product.id === action.payload.id ?
                        product.productUrl_2 ?
                            {
                                ...product,
                                
                                productUrl_1: action.payload.mdf.url_1,
                                productUrl_2: action.payload.mdf.url_2,
                            }
                            :
                            {
                                ...product,
                                productUrl_1: action.payload.mdf.url_1
                            }
                        :
                        {
                            ...product
                        }
                )
            }
        case CHANGE_PRICE:
            return {
                ...state,
                catalog: state.catalog.map(
                    product => product.id === action.payload.id ?
                        action.payload.promotionalPrice
                            ?
                            {
                                ...product,
                                price: action.payload.price,
                                promotionalPrice: action.payload.promotionalPrice
                            }
                            :
                            {
                                ...product,
                                price: action.payload.price
                            }
                        :
                        {
                            ...product
                        }
                )
            }
        case RESET_DEFAULT:
            return {
                ...state,
                catalog: state.catalog.map(
                    product => product.id === action.payload.id ?
                        {
                            ...product,
                            productUrl_1: action.payload.resetUrl_1,
                            productUrl_2: action.payload.resetUrl_2,
                            price: action.payload.currentPrice,
                            promotionalPrice: action.payload.currentPromotionalPrice
                        }
                        :
                        {
                            ...product
                        }
                )
            }
        default:
            return state;
    }
}

export const addAllCatalogCreator = (payload) => ({ type: ADD_ALL_CATALOG, payload });
export const changeUrlCreator = (payload) => ({ type: CHANGE_URL, payload });
export const changePriceCreator = (payload) => ({ type: CHANGE_PRICE, payload });
export const resetDefault = (payload) => ({ type: RESET_DEFAULT, payload });
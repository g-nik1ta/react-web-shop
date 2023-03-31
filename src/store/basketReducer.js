const defaultState = {
    basket: [],
    isPromocode: {
        isUsed: false,
        discount: 0
    },
    order: {}
}

export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_BASKET = 'REMOVE_BASKET';
export const REMOVE_PROMOCODE = 'REMOVE_PROMOCODE';
export const SET_PROMOCODE = 'SET_PROMOCODE';
export const SET_ORDER = 'SET_ORDER';

export default function basketReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PROMOCODE:
            return {
                ...state,
                isPromocode: {
                    isUsed: true,
                    discount: action.payload
                }
            }
        case SET_ORDER:
            const { id, nameSurname, city, telephone, email, wishes, payment, adress, orderNumber, date, status, sum, products } = action.payload;
            return {
                ...state,
                order: { id, nameSurname, city, telephone, email, wishes, payment, adress, orderNumber, date, status, sum, products }
            }
        case CHANGE_PRODUCT:
            const findProduct = state.basket.find(product =>
            (product.id === action.payload.product.id &&
                product.productCharacteristics.color === action.payload.productCharacteristics.color &&
                product.productCharacteristics.mdf === action.payload.productCharacteristics.mdf)
            );
            if (findProduct) {
                return {
                    ...state,
                    basket: state.basket.map(product =>
                        product.id === findProduct.id
                            ?
                            {
                                ...product,
                                count: (product.count + action.payload.count) > 999
                                    ?
                                    999
                                    :
                                    (product.count + action.payload.count) < 1
                                        ?
                                        1
                                        :
                                        product.count + action.payload.count
                            }
                            :
                            {
                                ...product
                            }
                    )
                }
            }
            return {
                ...state,
                basket: [
                    ...state.basket,
                    {
                        ...action.payload.product,
                        count: action.payload.count,
                        productCharacteristics: action.payload.productCharacteristics
                    }
                ]
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                basket: state.basket.filter(product =>
                    !(product.id === action.payload.product.id &&
                        product.productCharacteristics.color === action.payload.productCharacteristics.color &&
                        product.productCharacteristics.mdf === action.payload.productCharacteristics.mdf)
                )
            }
        case REMOVE_BASKET:
            return {
                ...state,
                basket: []
            }
        case REMOVE_PROMOCODE:
            return {
                ...state,
                isPromocode: {
                    isUsed: false,
                    discount: 0
                }
            }
        default:
            return state
    }
}

export const changeProductCreator = (payload) => ({ type: CHANGE_PRODUCT, payload });
export const removeProductCreator = (payload) => ({ type: REMOVE_PRODUCT, payload });
export const removeBasketCreator = (payload) => ({ type: REMOVE_BASKET, payload });
export const removePromocodeCreator = (payload) => ({ type: REMOVE_PROMOCODE, payload });
export const setPromocodeCreator = (payload) => ({ type: SET_PROMOCODE, payload });
export const setOrderCreator = (payload) => ({ type: SET_ORDER, payload });
const defaultState = {
    basket: []
}

export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_BASKET = 'REMOVE_BASKET';

export default function basketReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_PRODUCT:
            const findProduct = state.basket.find(product =>
                (product.id === action.payload.product.id &&
                product.productCharacteristics.color === action.payload.productCharacteristics.color &&
                product.productCharacteristics.mdf === action.payload.productCharacteristics.mdf)
            );
            if (findProduct) {
                if ((findProduct.count + action.payload.count) < 1) {
                    return {
                        ...state,
                        basket: state.basket.filter(
                            product => product.id !== action.payload.product.id
                        )
                    }
                } else return {
                    ...state,
                    basket: state.basket.map(product =>
                        product.id === action.payload.product.id &&
                            product.productCharacteristics.color === action.payload.productCharacteristics.color &&
                            product.productCharacteristics.mdf === action.payload.productCharacteristics.mdf
                            ?
                            {
                                ...product,
                                count: action.payload.count > 999
                                    ?
                                    999
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
        default:
            return state
    }
}

export const changeProductCreator = (payload) => ({ type: CHANGE_PRODUCT, payload });
export const removeProductCreator = (payload) => ({ type: REMOVE_PRODUCT, payload });
export const removeBasketCreator = (payload) => ({ type: REMOVE_BASKET, payload });
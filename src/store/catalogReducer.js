const defaultState = {
    catalog: [
        {
            id: 0,
            productName: 'iPhone11',
            productUrl_1: 'iPhone 11/normal/iphone11__red__01',
            productUrl_2: null,
            title: 'iPhone 11',
            price: '22449',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'iPhone 11/mini/iphone11__black', mdfCurrent: false },
                { id: 1, mdf: 'red', mdfUrl: 'iPhone 11/mini/iphone11__red', mdfCurrent: true },
                { id: 2, mdf: 'white', mdfUrl: 'iPhone 11/mini/iphone11__white', mdfCurrent: false },
                { id: 3, mdf: 'purple', mdfUrl: 'iPhone 11/mini/iphone11__purple', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: '64 gb', mdfPrice: '22449', mdfCurrent: true },
                { id: 1, mdf: '128 gb', mdfPrice: '25499', mdfCurrent: false },
                { id: 2, mdf: '256 gb', mdfPrice: '26700', mdfCurrent: false },
            ],
        },
        {
            id: 1,
            productName: 'iPhone11Pro',
            productUrl_1: 'iPhone 11 Pro Max/normal/iphone-11pro__gold__01',
            productUrl_2: null,
            title: 'iPhone 11 Pro Max',
            price: '29300',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'iPhone 11 Pro Max/mini/iphone-11pro__black', mdfCurrent: false },
                { id: 1, mdf: 'silver', mdfUrl: 'iPhone 11 Pro Max/mini/iphone-11pro__silver', mdfCurrent: false },
                { id: 2, mdf: 'gold', mdfUrl: 'iPhone 11 Pro Max/mini/iphone-11pro__gold', mdfCurrent: true },
            ],
            productModifications_02: [
                { id: 0, mdf: '64 gb', mdfPrice: '29300', mdfCurrent: true },
                { id: 1, mdf: '256 gb', mdfPrice: '34990', mdfCurrent: false },
                { id: 2, mdf: '512 gb', mdfPrice: '42559', mdfCurrent: false },
            ],
        },
        {
            id: 2,
            productName: 'iWatchS6Nike',
            productUrl_1: 'Apple Watch Series 6 Nike/normal/iwatch-s6-nike__black__01',
            productUrl_2: 'Apple Watch Series 6 Nike/normal/iwatch-s6-nike__black__02',
            title: 'Apple Watch Series 6 Nike',
            price: '15360',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'Apple Watch Series 6 Nike/mini/iwatch-s6-nike__black', mdfCurrent: true },
                { id: 1, mdf: 'white', mdfUrl: 'Apple Watch Series 6 Nike/mini/iwatch-s6-nike__white', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: '40', mdfPrice: '15360', mdfCurrent: true },
                { id: 1, mdf: '44', mdfPrice: '17660', mdfCurrent: false },
            ],
        },
        {
            id: 3,
            productName: 'iWatchS6',
            productUrl_1: 'Apple Watch Series 6/normal/iwatch-s6__red__01',
            productUrl_2: 'Apple Watch Series 6/normal/iwatch-s6__red__02',
            title: 'Apple Watch Series 6',
            price: '14860',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__black', mdfCurrent: false },
                { id: 1, mdf: 'white', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__white', mdfCurrent: false },
                { id: 2, mdf: 'red', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__red', mdfCurrent: true },
            ],
            productModifications_02: [
                { id: 0, mdf: '40', mdfPrice: '14860', mdfCurrent: true },
                { id: 1, mdf: '44', mdfPrice: '16399', mdfCurrent: false },
            ],
        },
        {
            id: 4,
            productName: 'airPodsPro',
            productUrl_1: 'AirPods Pro/normal/AirPods-Pro__white__01',
            productUrl_2: 'AirPods Pro/normal/AirPods-Pro__white__02',
            title: 'AirPods Pro',
            price: '6972',
            productModifications_01: [],
            productModifications_02: [],
        },
    ]
}

export const CHANGE_URL = 'CHANGE_URL';
export const CHANGE_PRICE = 'CHANGE_PRICE';
export const RESET_DEFAULT = 'RESET_DEFAULT';

export default function catalogReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_URL:
            return {
                ...state,
                catalog: state.catalog.map(
                    product => product.id === action.payload.id ?
                        action.payload.url_2 ?
                            {
                                ...product,
                                productUrl_1: action.payload.url_1,
                                productUrl_2: action.payload.url_2,
                            }
                            :
                            {
                                ...product,
                                productUrl_1: action.payload.url_1
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
                            price: action.payload.resetPrice,
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

export const changeUrlCreator = (payload) => ({ type: CHANGE_URL, payload });
export const changePriceCreator = (payload) => ({ type: CHANGE_PRICE, payload });
export const resetDefault = (payload) => ({ type: RESET_DEFAULT, payload });
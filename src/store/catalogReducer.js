const defaultState = {
    catalog: [
        {
            id: 0,
            productName: 'iPhone11',
            productUrl_1: 'iPhone 11/normal/iphone11__red__01',
            productUrl_2: null,
            title: 'iPhone 11',
            price: '22449',
            promotionalPrice: '21749',
            date: '16.01.2023',
            popular: '14',
            manufacturer: 'apple',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'iPhone 11/mini/iphone11__black', mdfCurrent: false },
                { id: 1, mdf: 'red', mdfUrl: 'iPhone 11/mini/iphone11__red', mdfCurrent: true },
                { id: 2, mdf: 'white', mdfUrl: 'iPhone 11/mini/iphone11__white', mdfCurrent: false },
                { id: 3, mdf: 'purple', mdfUrl: 'iPhone 11/mini/iphone11__purple', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: '64 gb', mdfPrice: '22449', promotionalMdfPrice: '21749', mdfCurrent: true },
                { id: 1, mdf: '128 gb', mdfPrice: '25499', promotionalMdfPrice: '24699', mdfCurrent: false },
                { id: 2, mdf: '256 gb', mdfPrice: '26700', promotionalMdfPrice: '25600', mdfCurrent: false },
            ],
        },
        {
            id: 1,
            productName: 'iPhone11Pro',
            productUrl_1: 'iPhone 11 Pro Max/normal/iphone-11pro__gold__01',
            productUrl_2: null,
            title: 'iPhone 11 Pro Max',
            price: '29300',
            promotionalPrice: null,
            date: '24.12.2022',
            popular: '11',
            manufacturer: 'Apple',
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
            promotionalPrice: null,
            date: '07.02.2023',
            popular: '8',
            manufacturer: 'Apple',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'Apple Watch Series 6 Nike/mini/iwatch-s6-nike__black', mdfCurrent: true },
                { id: 1, mdf: 'white', mdfUrl: 'Apple Watch Series 6 Nike/mini/iwatch-s6-nike__white', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: '40 мм', mdfPrice: '15360', mdfCurrent: true },
                { id: 1, mdf: '44 мм', mdfPrice: '17660', mdfCurrent: false },
            ],
        },
        {
            id: 3,
            productName: 'iWatchS6',
            productUrl_1: 'Apple Watch Series 6/normal/iwatch-s6__red__01',
            productUrl_2: 'Apple Watch Series 6/normal/iwatch-s6__red__02',
            title: 'Apple Watch Series 6',
            price: '14860',
            promotionalPrice: null,
            date: '18.01.2023',
            popular: '13',
            manufacturer: 'apple',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__black', mdfCurrent: false },
                { id: 1, mdf: 'white', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__white', mdfCurrent: false },
                { id: 2, mdf: 'red', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__red', mdfCurrent: true },
            ],
            productModifications_02: [
                { id: 0, mdf: '40 мм', mdfPrice: '14860', mdfCurrent: true },
                { id: 1, mdf: '44 мм', mdfPrice: '16399', mdfCurrent: false },
            ],
        },
        {
            id: 4,
            productName: 'airPodsPro',
            productUrl_1: 'AirPods Pro/normal/AirPods-Pro__white__01',
            productUrl_2: 'AirPods Pro/normal/AirPods-Pro__white__02',
            title: 'AirPods Pro',
            price: '6972',
            promotionalPrice: null,
            date: '02.01.2023',
            popular: '8',
            manufacturer: 'Apple',
            productModifications_01: [],
            productModifications_02: [],
        },
        {
            id: 5,
            productName: 'braidedMonobracelet',
            productUrl_1: 'Braided Monobracelet/normal/mband__rose__01',
            productUrl_2: 'Braided Monobracelet/normal/mband__rose__02',
            title: 'Плетёный монобраслет',
            price: '2772',
            promotionalPrice: '2448',
            date: '28.12.2022',
            popular: '5',
            manufacturer: 'apple',
            productModifications_01: [
                { id: 0, mdf: 'blue', mdfUrl: 'Braided Monobracelet/mini/mband__blue', mdfCurrent: false },
                { id: 1, mdf: 'rose', mdfUrl: 'Braided Monobracelet/mini/mband__rose', mdfCurrent: true },
                { id: 2, mdf: 'red', mdfUrl: 'Braided Monobracelet/mini/mband__red', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: '40 мм', mdfPrice: '2772', promotionalMdfPrice: '2448', mdfCurrent: true },
                { id: 1, mdf: '44 мм', mdfPrice: '2980', promotionalMdfPrice: '2520', mdfCurrent: false },
            ],
        },
        {
            id: 6,
            productName: 'airPods',
            productUrl_1: 'AirPods/normal/AirPods__white__01',
            productUrl_2: 'AirPods/normal/AirPods__white__02',
            title: 'Наушники AirPods с беспроводным зарядным футляром',
            price: '4172',
            promotionalPrice: null,
            date: '31.01.2022',
            popular: '13',
            manufacturer: 'Apple',
            productModifications_01: [],
            productModifications_02: [],
        },
        {
            id: 7,
            productName: 'Monobracelet',
            productUrl_1: 'Monobracelet/normal/band__blue__01',
            productUrl_2: 'Monobracelet/normal/band__blue__02',
            title: 'Монобраслет',
            price: '38416',
            promotionalPrice: null,
            date: '11.02.2023',
            popular: '9',
            manufacturer: 'Apple',
            productModifications_01: [
                { id: 0, mdf: 'blue', mdfUrl: null, mdfCurrent: true },
                { id: 1, mdf: 'black', mdfUrl: null, mdfCurrent: false },
                { id: 2, mdf: 'red', mdfUrl: null, mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: '40 мм', mdfPrice: '38416', mdfCurrent: true },
                { id: 1, mdf: '44 мм', mdfPrice: '49348', mdfCurrent: false },
            ],
        },
        {
            id: 8,
            productName: 'SmartBatteryCaseForiPhone',
            productUrl_1: 'Smart Battery Case for iPhone/normal/casebattery__black__01',
            productUrl_2: 'Smart Battery Case for iPhone/normal/casebattery__black__02',
            title: 'Чехол Smart Battery Case для iPhone',
            price: '3612',
            promotionalPrice: null,
            date: '15.01.2023',
            popular: '4',
            manufacturer: 'Apple',
            productModifications_01: [
                { id: 0, mdf: 'black', mdfUrl: 'Smart Battery Case for iPhone/mini/casebattery__black', mdfCurrent: true },
                { id: 1, mdf: 'pink', mdfUrl: 'Smart Battery Case for iPhone/mini/casebattery__pink', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: 'iPhone 11', mdfPrice: '3612', mdfCurrent: true },
                { id: 1, mdf: 'iPhone xr', mdfPrice: '3254', mdfCurrent: false },
                { id: 2, mdf: 'iPhone 11 Pro Max', mdfPrice: '4618', mdfCurrent: false },
            ],
        },
        {
            id: 9,
            productName: 'SiliconeCase',
            productUrl_1: 'Silicone Case/normal/case-11pro__blue__01',
            productUrl_2: 'Silicone Case/normal/case-11pro__blue__02',
            title: 'Силиконовый чехол для iPhone',
            price: '1092',
            promotionalPrice: null,
            date: '11.02.2023',
            popular: '6',
            manufacturer: 'apple',
            productModifications_01: [
                { id: 0, mdf: 'blue', mdfUrl: 'Silicone Case/mini/case-11pro__blue', mdfCurrent: true },
                { id: 1, mdf: 'black', mdfUrl: 'Silicone Case/mini/case-11pro__black', mdfCurrent: false },
                { id: 2, mdf: 'pink', mdfUrl: 'Silicone Case/mini/case-11pro__pink', mdfCurrent: false },
            ],
            productModifications_02: [
                { id: 0, mdf: 'iPhone 11', mdfPrice: '746', mdfCurrent: false },
                { id: 2, mdf: 'iPhone 11 Pro Max', mdfPrice: '1092', mdfCurrent: true },
            ],
        },
        {
            id: 10,
            productName: 'iWatchS3',
            productUrl_1: 'Apple Watch Series 3/normal/iwatch-s3__white__01',
            productUrl_2: 'Apple Watch Series 3/normal/iwatch-s3__white__02',
            title: 'Apple Watch Series 3',
            price: '5572',
            promotionalPrice: null,
            date: '07.02.2023',
            popular: '8',
            manufacturer: 'apple',
            productModifications_01: [
                { id: 0, mdf: 'white', mdfUrl: 'Apple Watch Series 3/mini/iwatch-s3__white', mdfCurrent: true },
            ],
            productModifications_02: [
                { id: 0, mdf: '38 мм', mdfPrice: '5572', mdfCurrent: true },
            ],
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
                        product.productUrl_2 ?
                            {
                                ...product,
                                productUrl_1: product.productUrl_1.replace(/__(.*?)__/g, `__${action.payload.mdf}__`),
                                productUrl_2: product.productUrl_2.replace(/__(.*?)__/g, `__${action.payload.mdf}__`),
                            }
                            :
                            {
                                ...product,
                                productUrl_1: product.productUrl_1.replace(/__(.*?)__/g, `__${action.payload.mdf}__`),
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
                        action.payload.promotional
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
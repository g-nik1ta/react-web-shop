const defaultState = {
    // catalog: [
    //     {
    //         id: 0,
    //         productName: 'iPhone11',
    //         productUrl_1: 'iPhone 11/normal/iphone11__red__01',
    //         productUrl_2: null,
    //         title: 'iPhone 11',
    //         price: '22449',
    //         promotionalPrice: '21749',
    //         date: '16.01.2023',
    //         popular: '14',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'iPhone 11/mini/iphone11__black', mdfCurrent: false },
    //             { id: 1, mdf: 'red', mdfUrl: 'iPhone 11/mini/iphone11__red', mdfCurrent: true },
    //             { id: 2, mdf: 'white', mdfUrl: 'iPhone 11/mini/iphone11__white', mdfCurrent: false },
    //             { id: 3, mdf: 'purple', mdfUrl: 'iPhone 11/mini/iphone11__purple', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '64 gb', mdfPrice: '22449', promotionalMdfPrice: '21749', mdfCurrent: true },
    //             { id: 1, mdf: '128 gb', mdfPrice: '25499', promotionalMdfPrice: '24699', mdfCurrent: false },
    //             { id: 2, mdf: '256 gb', mdfPrice: '26700', promotionalMdfPrice: '25600', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 1,
    //         productName: 'iPhone11Pro',
    //         productUrl_1: 'iPhone 11 Pro Max/normal/iphone-11pro__gold__01',
    //         productUrl_2: null,
    //         title: 'iPhone 11 Pro Max',
    //         price: '29300',
    //         promotionalPrice: null,
    //         date: '24.12.2022',
    //         popular: '11',
    //         manufacturer: 'Apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'iPhone 11 Pro Max/mini/iphone-11pro__black', mdfCurrent: false },
    //             { id: 1, mdf: 'silver', mdfUrl: 'iPhone 11 Pro Max/mini/iphone-11pro__silver', mdfCurrent: false },
    //             { id: 2, mdf: 'gold', mdfUrl: 'iPhone 11 Pro Max/mini/iphone-11pro__gold', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '64 gb', mdfPrice: '29300', mdfCurrent: true },
    //             { id: 1, mdf: '256 gb', mdfPrice: '34990', mdfCurrent: false },
    //             { id: 2, mdf: '512 gb', mdfPrice: '42559', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         productName: 'iWatchS6Nike',
    //         productUrl_1: 'Apple Watch Series 6 Nike/normal/iwatch-s6-nike__black__01',
    //         productUrl_2: 'Apple Watch Series 6 Nike/normal/iwatch-s6-nike__black__02',
    //         title: 'Apple Watch Series 6 Nike',
    //         price: '15360',
    //         promotionalPrice: null,
    //         date: '07.02.2023',
    //         popular: '8',
    //         manufacturer: 'Apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'Apple Watch Series 6 Nike/mini/iwatch-s6-nike__black', mdfCurrent: true },
    //             { id: 1, mdf: 'white', mdfUrl: 'Apple Watch Series 6 Nike/mini/iwatch-s6-nike__white', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '40 mm', mdfPrice: '15360', mdfCurrent: true },
    //             { id: 1, mdf: '44 mm', mdfPrice: '17660', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         productName: 'iWatchS6',
    //         productUrl_1: 'Apple Watch Series 6/normal/iwatch-s6__red__01',
    //         productUrl_2: 'Apple Watch Series 6/normal/iwatch-s6__red__02',
    //         title: 'Apple Watch Series 6',
    //         price: '14860',
    //         promotionalPrice: null,
    //         date: '18.01.2023',
    //         popular: '13',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__black', mdfCurrent: false },
    //             { id: 1, mdf: 'white', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__white', mdfCurrent: false },
    //             { id: 2, mdf: 'red', mdfUrl: 'Apple Watch Series 6/mini/iwatch-s6__red', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '40 mm', mdfPrice: '14860', mdfCurrent: true },
    //             { id: 1, mdf: '44 mm', mdfPrice: '16399', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 4,
    //         productName: 'airPodsPro',
    //         productUrl_1: 'AirPods Pro/normal/AirPods-Pro__white__01',
    //         productUrl_2: 'AirPods Pro/normal/AirPods-Pro__white__02',
    //         title: 'AirPods Pro',
    //         price: '6972',
    //         promotionalPrice: null,
    //         date: '02.01.2023',
    //         popular: '8',
    //         manufacturer: 'Apple',
    //         productModifications_01: [],
    //         productModifications_02: [],
    //     },
    //     {
    //         id: 5,
    //         productName: 'braidedMonobracelet',
    //         productUrl_1: 'Braided Monobracelet/normal/mband__rose__01',
    //         productUrl_2: 'Braided Monobracelet/normal/mband__rose__02',
    //         title: 'Плетёный монобраслет',
    //         price: '2772',
    //         promotionalPrice: '2448',
    //         date: '28.12.2022',
    //         popular: '5',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'blue', mdfUrl: 'Braided Monobracelet/mini/mband__blue', mdfCurrent: false },
    //             { id: 1, mdf: 'rose', mdfUrl: 'Braided Monobracelet/mini/mband__rose', mdfCurrent: true },
    //             { id: 2, mdf: 'red', mdfUrl: 'Braided Monobracelet/mini/mband__red', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '40 mm', mdfPrice: '2772', promotionalMdfPrice: '2448', mdfCurrent: true },
    //             { id: 1, mdf: '44 mm', mdfPrice: '2980', promotionalMdfPrice: '2520', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 6,
    //         productName: 'airPods',
    //         productUrl_1: 'AirPods/normal/AirPods__white__01',
    //         productUrl_2: 'AirPods/normal/AirPods__white__02',
    //         title: 'Наушники AirPods с беспроводным зарядным футляром',
    //         price: '4172',
    //         promotionalPrice: null,
    //         date: '31.01.2022',
    //         popular: '13',
    //         manufacturer: 'Apple',
    //         productModifications_01: [],
    //         productModifications_02: [],
    //     },
    //     {
    //         id: 7,
    //         productName: 'monobracelet',
    //         productUrl_1: 'Monobracelet/normal/band__blue__01',
    //         productUrl_2: 'Monobracelet/normal/band__blue__02',
    //         title: 'Монобраслет',
    //         price: '38416',
    //         promotionalPrice: null,
    //         date: '11.02.2023',
    //         popular: '9',
    //         manufacturer: 'Apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'blue', mdfUrl: null, mdfCurrent: true },
    //             { id: 1, mdf: 'black', mdfUrl: null, mdfCurrent: false },
    //             { id: 2, mdf: 'red', mdfUrl: null, mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '40 mm', mdfPrice: '38416', mdfCurrent: true },
    //             { id: 1, mdf: '44 mm', mdfPrice: '49348', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 8,
    //         productName: 'smartBatteryCaseForiPhone',
    //         productUrl_1: 'Smart Battery Case for iPhone/normal/casebattery__black__01',
    //         productUrl_2: 'Smart Battery Case for iPhone/normal/casebattery__black__02',
    //         title: 'Чехол Smart Battery Case для iPhone',
    //         price: '3612',
    //         promotionalPrice: null,
    //         date: '15.01.2023',
    //         popular: '4',
    //         manufacturer: 'Apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'Smart Battery Case for iPhone/mini/casebattery__black', mdfCurrent: true },
    //             { id: 1, mdf: 'pink', mdfUrl: 'Smart Battery Case for iPhone/mini/casebattery__pink', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: 'iPhone 11', mdfPrice: '3612', mdfCurrent: true },
    //             { id: 1, mdf: 'iPhone xr', mdfPrice: '3254', mdfCurrent: false },
    //             { id: 2, mdf: 'iPhone 11 Pro Max', mdfPrice: '4618', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 9,
    //         productName: 'siliconeCase',
    //         productUrl_1: 'Silicone Case/normal/case-11pro__blue__01',
    //         productUrl_2: 'Silicone Case/normal/case-11pro__blue__02',
    //         title: 'Силиконовый чехол для iPhone',
    //         price: '1092',
    //         promotionalPrice: null,
    //         date: '11.02.2023',
    //         popular: '6',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'blue', mdfUrl: 'Silicone Case/mini/case-11pro__blue', mdfCurrent: true },
    //             { id: 1, mdf: 'black', mdfUrl: 'Silicone Case/mini/case-11pro__black', mdfCurrent: false },
    //             { id: 2, mdf: 'pink', mdfUrl: 'Silicone Case/mini/case-11pro__pink', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: 'iPhone 11', mdfPrice: '746', mdfCurrent: false },
    //             { id: 2, mdf: 'iPhone 11 Pro Max', mdfPrice: '1092', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 10,
    //         productName: 'iWatchS3',
    //         productUrl_1: 'Apple Watch Series 3/normal/iwatch-s3__white__01',
    //         productUrl_2: 'Apple Watch Series 3/normal/iwatch-s3__white__02',
    //         title: 'Apple Watch Series 3',
    //         price: '5572',
    //         promotionalPrice: null,
    //         date: '07.02.2023',
    //         popular: '8',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'white', mdfUrl: 'Apple Watch Series 3/mini/iwatch-s3__white', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '38 mm', mdfPrice: '5572', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 11,
    //         productName: 'samsungGalaxyS21Ultra',
    //         title: 'Samsung Galaxy S21 Ultra',
    //         productUrl_1: 'Samsung Galaxy S21 Ultra/normal/samsung-galaxy-s21-ultra__grey__01',
    //         productUrl_2: null,
    //         price: '37999',
    //         promotionalPrice: null,
    //         date: '19.02.2023',
    //         popular: '7',
    //         manufacturer: 'samsung',
    //         productModifications_01: [
    //             { id: 0, mdf: 'grey', mdfUrl: 'Samsung Galaxy S21 Ultra/mini/samsung-galaxy-s21-ultra__grey', mdfCurrent: true },
    //             { id: 1, mdf: 'silver', mdfUrl: 'Samsung Galaxy S21 Ultra/mini/samsung-galaxy-s21-ultra__silver', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '128 gb', mdfPrice: '37999', mdfCurrent: true },
    //             { id: 1, mdf: '256 gb', mdfPrice: '40584', mdfCurrent: false },
    //             { id: 2, mdf: '512 gb', mdfPrice: '43864', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 12,
    //         productName: 'macbookAir2022',
    //         title: 'Macbook Air 2022',
    //         productUrl_1: 'Macbook Air 2022/normal/macbook-air-2022__beige__01',
    //         productUrl_2: 'Macbook Air 2022/normal/macbook-air-2022__beige__02',
    //         price: '82999',
    //         promotionalPrice: '74999',
    //         date: '20.02.2023',
    //         popular: '7',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'beige', mdfUrl: 'Macbook Air 2022/mini/macbook-air-2022__beige', mdfCurrent: false },
    //             { id: 1, mdf: 'black', mdfUrl: 'Macbook Air 2022/mini/macbook-air-2022__black', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '256 gb', mdfPrice: '64999', promotionalMdfPrice: '58999', mdfCurrent: false },
    //             { id: 1, mdf: '512 gb', mdfPrice: '82999', promotionalMdfPrice: '74999', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 13,
    //         productName: 'sonyWH1000XM4',
    //         title: 'Sony WH-1000XM4',
    //         productUrl_1: 'Sony WH-1000XM4/normal/sony-WH-1000XM4__midnight-blue__01',
    //         productUrl_2: 'Sony WH-1000XM4/normal/sony-WH-1000XM4__midnight-blue__02',
    //         price: '12999',
    //         promotionalPrice: null,
    //         date: '10.02.2023',
    //         popular: '6',
    //         manufacturer: 'sony',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'Sony WH-1000XM4/mini/sony-WH-1000XM4__black', mdfCurrent: false },
    //             { id: 1, mdf: 'midnight-blue', mdfUrl: 'Sony WH-1000XM4/mini/sony-WH-1000XM4__midnight-blue', mdfCurrent: true },
    //             { id: 2, mdf: 'silver', mdfUrl: 'Sony WH-1000XM4/mini/sony-WH-1000XM4__silver', mdfCurrent: false },
    //         ],
    //         productModifications_02: [],
    //     },
    //     {
    //         id: 14,
    //         productName: 'xiaomiRedmiNote11Pro',
    //         title: 'Xiaomi Redmi Note 11 Pro',
    //         productUrl_1: 'Xiaomi Redmi Note 11 Pro/normal/xiaomi-redmi-note-11pro__graphite__01',
    //         productUrl_2: null,
    //         price: '12999',
    //         promotionalPrice: null,
    //         date: '18.02.2023',
    //         popular: '14',
    //         manufacturer: 'xiaomi',
    //         productModifications_01: [
    //             { id: 0, mdf: 'twilight', mdfUrl: 'Xiaomi Redmi Note 11 Pro/mini/xiaomi-redmi-note-11pro__twilight', mdfCurrent: false },
    //             { id: 1, mdf: 'graphite', mdfUrl: 'Xiaomi Redmi Note 11 Pro/mini/xiaomi-redmi-note-11pro__graphite', mdfCurrent: true },
    //             { id: 2, mdf: 'white', mdfUrl: 'Xiaomi Redmi Note 11 Pro/mini/xiaomi-redmi-note-11pro__white', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '64 gb', mdfPrice: '11999', mdfCurrent: false },
    //             { id: 1, mdf: '128 gb', mdfPrice: '12999', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 15,
    //         productName: 'XiaomiRedmiNote10',
    //         title: 'Xiaomi Redmi Note 10',
    //         productUrl_1: 'Xiaomi Redmi Note 10/normal/xiaomi-redmi-note-10__green__01',
    //         productUrl_2: null,
    //         price: '9999',
    //         promotionalPrice: '8699',
    //         date: '12.02.2023',
    //         popular: '7',
    //         manufacturer: 'xiaomi',
    //         productModifications_01: [
    //             { id: 0, mdf: 'grey', mdfUrl: 'Xiaomi Redmi Note 10/mini/xiaomi-redmi-note-10__grey', mdfCurrent: false },
    //             { id: 1, mdf: 'white', mdfUrl: 'Xiaomi Redmi Note 10/mini/xiaomi-redmi-note-10__white', mdfCurrent: false },
    //             { id: 2, mdf: 'green', mdfUrl: 'Xiaomi Redmi Note 10/mini/xiaomi-redmi-note-10__green', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '64 gb', mdfPrice: '7799', promotionalMdfPrice: '7399', mdfCurrent: false },
    //             { id: 1, mdf: '128 gb', mdfPrice: '9999', promotionalMdfPrice: '8699', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 16,
    //         productName: 'SamsungGalaxyWatchActive2',
    //         title: 'Samsung Galaxy Watch Active 2',
    //         productUrl_1: 'Samsung Galaxy Watch Active 2/normal/samsung-galaxy-watch-active-2__black__01',
    //         productUrl_2: 'Samsung Galaxy Watch Active 2/normal/samsung-galaxy-watch-active-2__black__02',
    //         price: '8999',
    //         promotionalPrice: null,
    //         date: '10.02.2023',
    //         popular: '11',
    //         manufacturer: 'Samsung',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'Samsung Galaxy Watch Active 2/mini/samsung-galaxy-watch-active-2__black', mdfCurrent: true },
    //             { id: 1, mdf: 'silver', mdfUrl: 'Samsung Galaxy Watch Active 2/mini/samsung-galaxy-watch-active-2__silver', mdfCurrent: false },
    //             { id: 2, mdf: 'pink', mdfUrl: 'Samsung Galaxy Watch Active 2/mini/samsung-galaxy-watch-active-2__pink', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '40 mm', mdfPrice: '8199', mdfCurrent: false },
    //             { id: 1, mdf: '44 mm', mdfPrice: '8999', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 17,
    //         productName: 'AppleiPad10.2',
    //         title: 'Apple iPad 10.2',
    //         productUrl_1: 'Apple iPad 10.2/normal/ipad_10.2__grey__01',
    //         productUrl_2: null,
    //         price: '27499',
    //         promotionalPrice: '24999',
    //         date: '05.02.2023',
    //         popular: '6',
    //         manufacturer: 'apple',
    //         productModifications_01: [
    //             { id: 0, mdf: 'silver', mdfUrl: 'Apple iPad 10.2/mini/ipad_10.2__silver', mdfCurrent: false },
    //             { id: 1, mdf: 'grey', mdfUrl: 'Apple iPad 10.2/mini/ipad_10.2__grey', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '64 gb', mdfPrice: '18999', promotionalMdfPrice: '16999', mdfCurrent: false },
    //             { id: 1, mdf: '256 gb', mdfPrice: '27499', promotionalMdfPrice: '24999', mdfCurrent: true },
    //         ],
    //     },
    //     {
    //         id: 18,
    //         productName: 'SamsungGalaxyA52',
    //         title: 'Samsung Galaxy A52',
    //         productUrl_1: 'Samsung Galaxy A52/normal/samsung-galaxy-A52__black__01',
    //         productUrl_2: null,
    //         price: '27499',
    //         promotionalPrice: null,
    //         date: '03.02.2023',
    //         popular: '12',
    //         manufacturer: 'Samsung',
    //         productModifications_01: [
    //             { id: 0, mdf: 'black', mdfUrl: 'Samsung Galaxy A52/mini/samsung-galaxy-A52__black', mdfCurrent: true },
    //             { id: 1, mdf: 'white', mdfUrl: 'Samsung Galaxy A52/mini/samsung-galaxy-A52__white', mdfCurrent: false },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '64 gb', mdfPrice: '10299', mdfCurrent: false },
    //             { id: 1, mdf: '128 gb', mdfPrice: '11999', mdfCurrent: true },
    //             { id: 2, mdf: '256 gb', mdfPrice: '14499', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 19,
    //         productName: 'XiaomiRedmiNote11T',
    //         title: 'Xiaomi Redmi Note 11T',
    //         productUrl_1: 'Xiaomi Redmi Note 11T/normal/xiaomi-redmi-note-11T__white__01',
    //         productUrl_2: null,
    //         price: '15999',
    //         promotionalPrice: null,
    //         date: '13.02.2023',
    //         popular: '16',
    //         manufacturer: 'xiaomi',
    //         productModifications_01: [
    //             { id: 0, mdf: 'grey', mdfUrl: 'Xiaomi Redmi Note 11T/mini/xiaomi-redmi-note-11T__grey', mdfCurrent: false },
    //             { id: 1, mdf: 'blue', mdfUrl: 'Xiaomi Redmi Note 11T/mini/xiaomi-redmi-note-11T__blue', mdfCurrent: false },
    //             { id: 3, mdf: 'white', mdfUrl: 'Xiaomi Redmi Note 11T/mini/xiaomi-redmi-note-11T__white', mdfCurrent: true },
    //         ],
    //         productModifications_02: [
    //             { id: 0, mdf: '128 gb', mdfPrice: '15999', mdfCurrent: true },
    //             { id: 1, mdf: '256 gb', mdfPrice: '17999', mdfCurrent: false },
    //         ],
    //     },
    //     {
    //         id: 20,
    //         productName: 'JBLTune210',
    //         title: 'JBL Tune 210',
    //         productUrl_1: 'JBL Tune 210/normal/JBL-tune-210__black__01',
    //         productUrl_2: null,
    //         price: '549',
    //         promotionalPrice: '499',
    //         date: '19.02.2023',
    //         popular: '6',
    //         manufacturer: 'JBL',
    //         productModifications_01: [
    //             { id: 0, mdf: 'white', mdfUrl: 'JBL Tune 210/mini/JBL-tune-210__white', mdfCurrent: false },
    //             { id: 1, mdf: 'black', mdfUrl: 'JBL Tune 210/mini/JBL-tune-210__black', mdfCurrent: true },
    //         ],
    //         productModifications_02: [],
    //     },
    //     {
    //         id: 21,
    //         productName: 'SonyWF-1000XM4',
    //         title: 'Sony WF-1000XM4',
    //         productUrl_1: 'Sony WF-1000XM4/normal/sony-wf-1000xm4__black__01',
    //         productUrl_2: 'Sony WF-1000XM4/normal/sony-wf-1000xm4__black__02',
    //         price: '11599',
    //         promotionalPrice: '9999',
    //         date: '20.02.2023',
    //         popular: '9',
    //         manufacturer: 'Sony',
    //         productModifications_01: [
    //             { id: 0, mdf: 'silver', mdfUrl: 'Sony WF-1000XM4/mini/sony-wf-1000xm4__silver', mdfCurrent: false },
    //             { id: 1, mdf: 'black', mdfUrl: 'Sony WF-1000XM4/mini/sony-wf-1000xm4__black', mdfCurrent: true },
    //         ],
    //         productModifications_02: [],
    //     },
    // ]

    catalog: []
}

export const ADD_PRODUCTS_PAGE_IMAGE = 'ADD_PRODUCTS_PAGE_IMAGE';
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
        case ADD_PRODUCTS_PAGE_IMAGE:
            return {
                ...state,
                catalog: state.catalog.map(
                    product =>
                        product.productName === action.payload.productName
                            ?
                            {
                                ...product,
                                productUrl_1:
                                    action.payload.dataImg.productUrl_1
                                        ?
                                        action.payload.dataImg.productUrl_1
                                        :
                                        action.payload.dataImg.mdfUrl.length
                                            ?
                                            (action.payload.dataImg.mdfUrl.find(element => element.mdf === (product.productModifications_01.find(el => el.mdfCurrent).mdf))).url_1
                                            :
                                            null,
                                productUrl_2:
                                    action.payload.dataImg.productUrl_2
                                        ?
                                        action.payload.dataImg.productUrl_2
                                        :
                                        action.payload.dataImg.mdfUrl.length
                                            ?
                                            (action.payload.dataImg.mdfUrl.find(element => element.mdf === (product.productModifications_01.find(el => el.mdfCurrent).mdf))).url_2
                                            :
                                            null,
                                productModifications_01: product.productModifications_01.map(
                                    productMdf => {
                                        const mdfUrl = action.payload.dataImg.mdfUrl.find(element => element.mdf === productMdf.mdf);
                                        return mdfUrl
                                            ?
                                            {
                                                ...productMdf,
                                                mdfUrl: mdfUrl.url_mini,
                                                url_1: mdfUrl.url_1,
                                                url_2: mdfUrl.url_2,
                                            }
                                            :
                                            {
                                                ...productMdf
                                            }
                                    }
                                )
                            }
                            :
                            {
                                ...product
                            }
                )
            }
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

export const addProductsPageImageCreator = (payload) => ({ type: ADD_PRODUCTS_PAGE_IMAGE, payload });
export const addAllCatalogCreator = (payload) => ({ type: ADD_ALL_CATALOG, payload });
export const changeUrlCreator = (payload) => ({ type: CHANGE_URL, payload });
export const changePriceCreator = (payload) => ({ type: CHANGE_PRICE, payload });
export const resetDefault = (payload) => ({ type: RESET_DEFAULT, payload });
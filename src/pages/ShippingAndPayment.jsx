import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const ShippingAndPayment = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Покупателям', path: '/home/buyers' },
            { routeItem: 'Доставка и оплата', path: '/home/buyers/shipping-and-payment' },
        ]))
    }, []);

    return (
        <>
            <RoutePanel />
            <section className='shipping-and-payment row'>
                <h1 className="title">Доставка и оплата</h1>
                <div className="shipping-and-payment_content">
                    <h4 className='subtitle'>
                        Оплата
                    </h4>
                    <p>
                        Оплату можно осуществить следующими способами:
                    </p>
                    <ul>
                        <li className="item">С помощью карт VISA / Mastercard на сайте при заказе</li>
                        <li className="item">Наличными при получении товара в отделении "Новая почта"</li>
                        <li className="item">С помощью сервисов Google Pay, Apple Pay</li>
                    </ul>
                    <h4 className='subtitle'>
                        Доставка
                    </h4>
                    <p>
                        В период с 26 марта по 1 июня 2023 действуют специальные условия на доставку: заказ на сумму от 100 гривен доставляются на отделение Новой почты и курьером по адресу - бесплатно!
                    </p>
                    <p>
                        Стоимость доставки заказов на сумму до 100 грн, оплаченных при оформлении заказа онлайн
                    </p>
                    <ul>
                        <li className="item">В отделение Новой почты - 65 грн;</li>
                        <li className="item">Курьерская доставка Новой почты - 115 грн</li>
                    </ul>
                    <p>
                        Оформление наложенным платежом - стоимость доставки по тарифам Новой почты + 40 грн (фиксированная сумма перевода денежных средств) + 2% от суммы заказа.
                    </p>
                    <p>
                        Ориентировочный срок доставки Заказ составляет от 1-го до 3-х рабочих дней. Доставка некоторых Заказов (зависит от выбранного товара) может составлять срок до 5-ти рабочих дней. Сроки поставки Заказ приведены без учета дня заказа и при использовании перевозчика ООО "Новая Почта". О точном срок доставки Заказ Покупателя оповещает перевозчик.
                    </p>
                    <p>
                        Внимание! <br/>
                        Заказ хранится на складе транспортной компании не более 5-ти рабочих дней, после истечения этого срока - отправляется обратно. <br/>
                        Получить заказ может только тот человек, который указан в транспортной декларации как получатель. <br/>
                        При себе необходимо иметь документ, удостоверяющий личность. <br/>
                        Заказ с доставкой через "Новую почту" принимаются в соответствии с графиком работы перевозчика. График работы компании "Новая почта" Вы сможете найти на ее официальном сайте. <br/>
                    </p>
                </div>
            </section>
        </>
    )
}

export default ShippingAndPayment;
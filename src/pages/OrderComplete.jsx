import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderCompleteItem from '../components/OrderCompleteItem';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { generateOrderHash } from '../utils/basket';

const OrderComplete = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const order = useSelector(state => state.basketReducer.order);

    useEffect(() => {
        if (!order.id) navigate('/home')
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop/' },
        ]))
    }, [])

    return (
        <>
            <RoutePanel />
            {
                order.id
                    ?
                    <div className="complete_container">
                        <div className="complete_content row">
                            <h1 className='title'>Заказ оформлен</h1>
                            <p className='subtitle'>
                                Спасибо за заказ. Он будет обработан в ближайшее время. Пожалуйста, ознакомьтесь с деталями заказа ниже.
                            </p>
                            <div className="order-details-block">
                                <div className="order-details-info">
                                    <div className="order-info">
                                        <p>Детали заказа:</p>
                                        <div className="info-block">
                                            <p className='info-title'>Оплата:</p>
                                            <p>{order.payment}</p>
                                        </div>
                                        <div className="info-block">
                                            <p className='info-title'>Номер заказа:</p>
                                            <p> {order.orderNumber}</p>
                                        </div>
                                        <div className="info-block">
                                            <p className='info-title'>Город:</p>
                                            <p>{order.city}</p>
                                        </div>
                                        <div className="info-block">
                                            <p className='info-title'>Отделение новой почты:</p>
                                            <p>{order.adress}</p>
                                        </div>
                                        <div className="info-block">
                                            <p className='info-title'>Статус:</p>
                                            <p>{order.status}</p>
                                        </div>
                                        <div className="info-block">
                                            <p className='info-title'>Сумма:</p>
                                            <p><b>{order.sum}</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-products-list">
                                    <p className='products-list-title'>
                                        Товары на сумму {order.sum}
                                    </p>
                                    <div className="products-list">
                                        {order.products.map(item =>
                                            <OrderCompleteItem item={item} key={generateOrderHash()} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default OrderComplete;
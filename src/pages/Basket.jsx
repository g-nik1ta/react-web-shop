import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BasketItem from '../components/basket/BasketItem';
import NoItems from '../components/basket/NoItems';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { getTotalPrice } from '../utils/basket';
import { closeSidebar } from '../utils/toggleClass';

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basketReducer.basket);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop/' },
        ]))
    }, [])

    return (
        <>
            <RoutePanel />
            <div className="basket_container">
                <div className="basket_content row">
                    <h1 className='title'>Корзина</h1>
                    {
                        !!basket.length
                            ?
                            <div className="basket-items">
                                <div className="basket-header">
                                    <div className='products'>Товары</div>
                                    <div className='value'>Стоимость</div>
                                    <div className='count'>Количество</div>
                                    <div className='price'>Цена</div>
                                </div>
                                {
                                    basket.map(item =>
                                        <BasketItem key={item.id} item={item} />
                                    )
                                }
                                <div className="total-all">
                                    <span>Всего:</span>
                                    <span>{getTotalPrice(basket)} ₴</span>
                                </div>
                                <Link
                                    to={`/shop/checkout`}
                                    onClick={() => closeSidebar('basket')}
                                    className="full-checkout"
                                >
                                    <button>
                                        Оформить
                                    </button>
                                </Link>
                            </div>
                            :
                            <NoItems />
                    }
                </div>
            </div>
        </>
    )
}

export default Basket;
import React from 'react';
import { Link } from 'react-router-dom';
import { generateOrderHash, getTotalPrice } from '../../utils/basket';
import { closeSidebar } from '../../utils/toggleClass';
import ProductItem from './ProductItem';

const BasketItems = ({ basket, setExpressCheckout }) => {
    return (
        <>
            <h1 className="title">Корзина</h1>
            <div className='content'>
                <div className="card-items">
                    {basket.map(item =>
                        <ProductItem item={item} key={generateOrderHash()} />
                    )}
                </div>
                <div className="basket-btn-block">
                    <div className="total">
                        <p>Всего</p>
                        <p>{getTotalPrice(basket)} ₴</p>
                    </div>
                    <div className="checkout-options">
                        <Link
                            to={`/shop/checkout`}
                            onClick={() => closeSidebar('basket')}
                        >
                            <button className="full-checkout">
                                Оформить
                            </button>
                        </Link>
                        <button
                            onClick={() => setExpressCheckout(true)}
                            className="express-checkout"
                        >
                            Офорить в 1 клик
                        </button>
                    </div>
                    <button
                        onClick={() => closeSidebar('basket')}
                        className="continue-shopping"
                    >
                        Продолжить покупки
                    </button>
                </div>
            </div>
        </>
    )
}

export default BasketItems;
import React from 'react';
import { generateOrderHash, getTotalPtice } from '../../utils/basket';
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
                        <p>{getTotalPtice(basket)} ₴</p>
                    </div>
                    <div className="checkout-options">
                        <button
                            className="full-checkout"
                        >
                            Оформить
                        </button>
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
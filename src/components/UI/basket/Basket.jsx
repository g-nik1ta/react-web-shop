import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalLength } from '../../../utils/basket';
import { openSidebar } from '../../../utils/toggleClass';
import cls from './Basket.module.css';

const Basket = () => {
    const basket = useSelector(state => state.basketReducer.basket);

    return (
        <div
            className={cls.basket}
            onClick={() => openSidebar('.sidebar-window.basket')}
        >
            <span className={cls.itemsCount}>
                {getTotalLength(basket)}
            </span>
        </div>
    )
}

export default Basket;
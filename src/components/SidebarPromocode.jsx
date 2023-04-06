import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalDiscountPrice, getTotalPrice } from '../utils/basket';
import { closeSidebar } from '../utils/toggleClass';
import PromocodeBlock from './checkout/PromocodeBlock';

const SidebarPromocode = () => {
    const basket = useSelector(state => state.basketReducer.basket);
    const isPromocode = useSelector(state => state.basketReducer.isPromocode);

    return (
        <div className='sidebar-window promocode'>
            <div className='close-window_wrapper'>
                <span
                    className='close-window'
                    onClick={() => closeSidebar('.sidebar-window.promocode')}
                >&#10006;</span>
            </div>
            <div className="total">
                <div className="total-price">
                    <span>Стоимость товаров:</span>
                    <b><span>{getTotalPrice(basket)} ₴</span></b>
                </div>
                <div className="total-delivery">
                    <span>Стоимость доставки:</span>
                    <b><span>-</span></b>
                </div>
                <PromocodeBlock />
                <div className="total-all">
                    <span>Всего:</span>
                    {
                        isPromocode.isUsed
                            ?
                            <span>{getTotalDiscountPrice(basket, isPromocode.discount)} ₴</span>
                            :
                            <span>{getTotalPrice(basket)} ₴</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default SidebarPromocode;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalDiscountPrice, getTotalPrice } from '../../utils/basket';

const BasketInfoPanel = () => {
    const basket = useSelector(state => state.basketReducer.basket);
    const isPromocode = useSelector(state => state.basketReducer.isPromocode);

    return (
        <div className="basket-info-panel">
            <div className="info-content">
                <span className='subtitle'>
                    Заказ
                </span>
                <div className="total-all">
                    <span>Всего:&nbsp;</span>
                    {
                        isPromocode.isUsed
                            ?
                            <span>{getTotalDiscountPrice(basket, isPromocode.discount)} ₴</span>
                            :
                            <b><span>{getTotalPrice(basket)} ₴</span></b>
                    }
                </div>
                <div className="edit">
                    <Link to={'/shop/basket'}>
                        Редактировать
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BasketInfoPanel;
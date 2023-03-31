import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { generateOrderHash, getTotalDiscountPrice, getTotalPrice } from '../../utils/basket';
import ProductItem from './ProductItem';
import PromocodeBlock from './PromocodeBlock';

const BasketInfo = ({ basket }) => {
    const isPromocode = useSelector(state => state.basketReducer.isPromocode);

    return (
        <div className="basket-info">
            <div className="edit-block">
                <span className='subtitle'>
                    Заказ
                </span>
                <div className="edit">
                    <Link to={'/shop/basket'}>
                        Редактировать
                    </Link>
                </div>
            </div>
            <div className="shopping-cart">
                <div className="card-items">
                    {basket.map(item =>
                        <ProductItem item={item} key={generateOrderHash()} />
                    )}
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
        </div>
    )
}

export default BasketInfo;
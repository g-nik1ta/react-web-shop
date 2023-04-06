import React from 'react';
import { Link } from 'react-router-dom';
import { getFullProductPrice } from '../utils/basket';
import { getCamelCase } from '../utils/products';

const OrderCompleteItem = ({ item }) => {
    return (
        <div className="item">
            <Link to={`/shop/${item.productName}`} className="image">
                <img src={item.productUrl_1} alt="img" />
            </Link>
            <div className="name-block">
                <Link to={`/shop/${item.productName}`} className="product-name">
                    {item.title}
                </Link>
                <p>
                    Цвет: "{getCamelCase(item.productCharacteristics.color)}"
                    {
                        item.sub
                            ?
                            <>
                                , {item.sub}: {item.productCharacteristics.mdf}
                            </>
                            :
                            null
                    }
                </p>
                <div className="value">
                    Цена:&nbsp;
                    {
                        item.promotionalPrice
                            ?
                            <p className='value-block'>
                                <span>
                                    {(Number(item.price)).toLocaleString('ru')} ₴
                                </span>
                                {(Number(item.promotionalPrice)).toLocaleString('ru')} ₴
                            </p>
                            :
                            <p className='value-block'>
                                {(Number(item.price)).toLocaleString('ru')} ₴
                            </p>
                    }
                </div>
                <p>
                    <span>Количество: {item.count}</span>
                </p>
                <p className='price'>
                    <b><span>
                        {getFullProductPrice(item)} ₴
                    </span></b>
                </p>
            </div>
        </div>
    )
}

export default OrderCompleteItem;
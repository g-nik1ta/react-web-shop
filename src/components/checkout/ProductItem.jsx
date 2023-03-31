import React from 'react';
import { Link } from 'react-router-dom';
import { getCamelCase } from '../../utils/products';

const ProductItem = ({ item }) => {
    return (
        <div className="item">
            <Link to={`/shop/${item.productName}`} className="image">
                <img src={item.productUrl_1} alt="img" />
            </Link>
            <div className="name-block">
                <Link to={`/shop/${item.productName}`} className="product-name">
                    {item.title}
                </Link>
                <p className='details'>
                    Цвет: "{getCamelCase(item.productCharacteristics.color)}"
                    {
                        item.mdfSub
                        ?
                        `, ${item.mdfSub}: ${item.productCharacteristics.mdf}`
                        :
                        null
                    }
                </p>
                <div className="price-count">
                    {
                        item.promotionalPrice
                            ?
                            <p className='price-block'>
                                <span>
                                    {(Number(item.price)).toLocaleString('ru')} ₴
                                </span>
                                {(Number(item.promotionalPrice)).toLocaleString('ru')} ₴
                            </p>
                            :
                            <p className='price-block'>
                                {(Number(item.price)).toLocaleString('ru')} ₴
                            </p>
                    }
                    <div className="count">
                        <span>x {item.count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
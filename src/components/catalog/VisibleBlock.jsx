import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../UI/loader/Loader';

const VisibleBlock = ({ product, ...props }) => {
    return (
        <Link to={`/shop/${product.productName}`} className="visible-block" {...props}>
            <div className="img__wrapper">
                {
                    !product.productUrl_1
                    ?
                    <Loader scale={.4}/>
                    :
                    <img
                        src={product.productUrl_1}
                        alt='img'
                        className={product.productUrl_2 ? 'card-img main-img' : 'card-img only'}
                    />
                }
                {
                    product.productUrl_2 && <img
                        src={product.productUrl_2}
                        alt='img'
                        className='card-img additional-img'
                    />
                }
            </div>
            <h3 className='card-title'>
                {product.title}
            </h3>
            {
                product.promotionalPrice === null
                    ?
                    <p className='card-price'>
                        {(Number(product.price)).toLocaleString('ru')} ₴
                    </p>
                    :
                    <p className='card-promotional-price'>
                        <span>
                            {(Number(product.price)).toLocaleString('ru')} ₴
                        </span>
                        {(Number(product.promotionalPrice)).toLocaleString('ru')} ₴
                    </p>
            }
        </Link>
    )
}

export default VisibleBlock;
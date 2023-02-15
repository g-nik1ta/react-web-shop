import React from 'react';

const VisibleBlock = ({product, ...props}) => {
    return (
        <div className="visible-block" {...props}>
            <img
                src={require(`../../assets/catalog/${product.productUrl_1}.jpg`)}
                alt='img'
                className={product.productUrl_2 ? 'card-img main-img' : 'card-img only'}
            />
            {
                product.productUrl_2 && <img
                    src={require(`../../assets/catalog/${product.productUrl_2}.jpg`)}
                    alt='img'
                    className='card-img additional-img'
                />
            }
            <h3 className='card-title'>
                {product.title}
            </h3>
            <p className='card-price'>
                {(Number(product.price)).toLocaleString('ru')} ₴
            </p>
        </div>
    )
}

export default VisibleBlock;
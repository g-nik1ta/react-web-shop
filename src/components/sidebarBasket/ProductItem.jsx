import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeProductCreator, removeProductCreator } from '../../store/basketReducer';
import { getCamelCase } from '../../utils/products';

const ProductItem = ({ item }) => {
    const dispatch = useDispatch();
    const [productCount, setProductCount] = useState(1);
    const decrementRef = useRef();
    const incrementRef = useRef();

    const changeCount = (e) => {
        const value = e.target.value.replace(/^0+/, '');
        const count = -item.count + Number(value);
        dispatch(changeProductCreator({ product: item, count, productCharacteristics: item.productCharacteristics }))
    }

    const decrement = () => {
        dispatch(changeProductCreator({ product: item, count: -1, productCharacteristics: item.productCharacteristics }))
    }

    const increment = () => {
        dispatch(changeProductCreator({ product: item, count: 1, productCharacteristics: item.productCharacteristics }))
    }

    useEffect(() => {
        if (item.count > 1) {
            decrementRef.current.classList.remove('disabled')
        } else decrementRef.current.classList.add('disabled')
        if (item.count < 999) {
            incrementRef.current.classList.remove('disabled')
        } else incrementRef.current.classList.add('disabled')
        setProductCount(item.count);
    }, [item.count])

    return (
        <div className="item">
            <Link to={`/shop/${item.productName}`} className="image">
                <img src={item.productUrl_1} alt="img" />
            </Link>
            <div className="name-block">
                <Link to={`/shop/${item.productName}`} className="product-name">
                    {item.title} |&nbsp;
                    <span className='product-manufacturer'>
                        {getCamelCase(item.manufacturer)}
                    </span>
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
                        <span
                            ref={decrementRef}
                            className='minus disabled'
                            onClick={(decrement)}
                        >-</span>
                        <input
                            type="number"
                            value={productCount}
                            onChange={e => changeCount(e)}
                        />
                        <span
                            ref={incrementRef}
                            className='plus'
                            onClick={increment}
                        >+</span>
                    </div>
                </div>
                <p
                    className="remove"
                    onClick={() => dispatch(removeProductCreator({ product: item, productCharacteristics: item.productCharacteristics }))}>
                    Удалить
                </p>
            </div>
        </div>
    )
}

export default ProductItem;
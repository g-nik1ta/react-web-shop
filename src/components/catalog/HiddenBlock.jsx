import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changePriceCreator, changeUrlCreator } from '../../store/catalogReducer';
import MyButton from '../UI/button/MyButton';
import { toggleClass } from '../../utils/toggleClass';

const HiddenBlock = ({ product, ...props }) => {
    const dispatch = useDispatch();
    const HiddenBlockRef = useRef();
    useEffect(() => {
        if (!HiddenBlockRef.current.firstChild.firstChild.firstChild) {
            HiddenBlockRef.current.parentElement.classList.add('shortBefore')
        }
    }, [])

    function toggleProductMdf_01(e, mdf, name, id) {
        toggleClass(e);

        switch (name) {
            case 'iPhone11':
                dispatch(changeUrlCreator({
                    url_1: `iPhone 11/normal/iphone11__${mdf}__01`,
                    id,
                }));
                break;
            case 'iPhone11Pro':
                dispatch(changeUrlCreator({
                    url_1: `iPhone 11 Pro Max/normal/iphone-11pro__${mdf}__01`,
                    id,
                }));
                break;
            case 'iWatchS6Nike':
                dispatch(changeUrlCreator({
                    url_1: `Apple Watch Series 6 Nike/normal/iwatch-s6-nike__${mdf}__01`,
                    url_2: `Apple Watch Series 6 Nike/normal/iwatch-s6-nike__${mdf}__02`,
                    id,
                }));
                break;
            case 'iWatchS6':
                dispatch(changeUrlCreator({
                    url_1: `Apple Watch Series 6/normal/iwatch-s6__${mdf}__01`,
                    url_2: `Apple Watch Series 6/normal/iwatch-s6__${mdf}__02`,
                    id,
                }));
                break;
            case 'airPodsPro':
                dispatch(changeUrlCreator({
                    url_1: `AirPods Pro/normal/AirPods-Pro__${mdf}__01`,
                    url_2: `AirPods Pro/normal/AirPods-Pro__${mdf}__02`,
                    id,
                }));
                break;
            default:
                console.log('default case!');
                break;
        }
    }

    function toggleProductMdf_02(e, price, id) {
        toggleClass(e);
        dispatch(changePriceCreator({ price, id }));
    }

    return (
        <div className="hidden-block" {...props} ref={HiddenBlockRef}>
            <div className="product-modifications">
                <div className="modifications-choose-line" data-product-name={product.productName}>
                    {product.productModifications_01.map(productMdf =>
                        <div
                            key={productMdf.id}
                            className={productMdf.mdfCurrent
                                ? 'product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                : 'product-mdf-img__wrapper product-mdf-item'
                            }
                            onClick={(e) => toggleProductMdf_01(e, productMdf.mdf, product.productName, product.id)}
                        >
                            <img
                                src={require(`../../assets/catalog/${productMdf.mdfUrl}.jpg`)}
                                alt={productMdf.mdf}
                                className='product-mdf-img'
                            />
                        </div>
                    )}

                </div>
                <div className="modifications-choose-line">
                    {product.productModifications_02.map(productMdf =>
                        <div
                            key={productMdf.id}
                            className={productMdf.mdfCurrent
                                ? 'product-mdf-txt product-mdf-item product-mdf-item-current'
                                : 'product-mdf-txt product-mdf-item'
                            }
                            onClick={(e) => toggleProductMdf_02(e, productMdf.mdfPrice, product.id)}
                        >
                            {productMdf.mdf}
                        </div>
                    )}
                </div>
            </div>
            <div className="product-buy-block">
                <MyButton>Купить</MyButton>
            </div>
        </div>
    )
}

export default HiddenBlock;
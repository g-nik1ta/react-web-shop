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

    function toggleProductMdf_01(e, mdf, id) {
        toggleClass(e);
        dispatch(changeUrlCreator({ id, mdf }));
    }

    function toggleProductMdf_02(e, price, id, promotionalPrice = null, promotional = false) {
        toggleClass(e);
        dispatch(changePriceCreator({ price, id, promotionalPrice, promotional }));
    }

    return (
        <div className="hidden-block" {...props} ref={HiddenBlockRef}>
            <div className="product-modifications">
                <div className="modifications-choose-line" data-product-name={product.productName}>
                    {product.productModifications_01.map(productMdf =>
                        <div
                            key={productMdf.id}
                            className={productMdf.mdfUrl
                                ? productMdf.mdfCurrent
                                    ? 'product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                    : 'product-mdf-img__wrapper product-mdf-item'
                                : productMdf.mdfCurrent
                                    ? 'product-mdf-color__block product-mdf-item product-mdf-item-current'
                                    : 'product-mdf-color__block product-mdf-item'
                            }
                            style={!productMdf.mdfUrl ? { backgroundColor: productMdf.color } : {}}
                            onClick={e => productMdf.mdfUrl
                                ?
                                toggleProductMdf_01(e, productMdf.mdf, product.id)
                                :
                                toggleClass(e)
                            }
                        >
                            {productMdf.mdfUrl && <img
                                src={productMdf.mdfUrl}
                                alt={productMdf.mdf}
                                className='product-mdf-img'
                            />}
                        </div>
                    )}
                </div>
                <div className="modifications-choose-line">
                    {
                        product.productModifications_02.map(productMdf =>
                            <div
                                key={productMdf.id}
                                className={productMdf.mdfCurrent
                                    ? 'product-mdf-txt product-mdf-item product-mdf-item-current'
                                    : 'product-mdf-txt product-mdf-item'
                                }
                                onClick={(e) => {
                                    product.promotionalPrice === null
                                        ?
                                        toggleProductMdf_02(e, productMdf.mdfPrice, product.id)
                                        :
                                        toggleProductMdf_02(e, productMdf.mdfPrice, product.id, productMdf.promotionalMdfPrice, true)
                                }}
                            >
                                {productMdf.mdf}
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="product-buy-block">
                <MyButton>Купить</MyButton>
            </div>
        </div>
    )
}

export default HiddenBlock;
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePriceCreator, changeUrlCreator } from '../../store/catalogReducer';
import { getCamelCase } from '../../utils/products';
import { toggleClass } from '../../utils/toggleClass';

const ProductModifications = ({ product, ...props }) => {
    const dispatch = useDispatch();

    function toggleProductMdf_01(e, mdf, id) {
        toggleClass(e);
        dispatch(changeUrlCreator({ id, mdf }));

        const mdfCurrent = product.productModifications_01.find(item => item.mdf === mdf.mdf);
        props.setProductsGallery([mdfCurrent.url_1, mdfCurrent.url_2, ...mdfCurrent.gallery])

        props.setProductCharacteristics({
            ...props.productCharacteristics, color: getCamelCase(mdf.mdf)
        });
    }

    function toggleProductMdf_02(mdf, e, price, id, promotionalPrice = null) {
        toggleClass(e);
        dispatch(changePriceCreator({ price, id, promotionalPrice }));

        props.setProductCharacteristics({ ...props.productCharacteristics, mdf })
    }

    return (
        <div className="product-modifications">
            <div className="modifications-choose-block">
                <p className='sub'>
                    Цвет
                </p>
                <div className="modifications-choose-line">
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
                            onClick={e => productMdf.url_1
                                ?
                                toggleProductMdf_01(e, productMdf, product.id)
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
            </div>
            {product.mdfSub && <div className="modifications-choose-block">
                <p className='sub'>
                    {product.mdfSub}
                </p>
                <div className="modifications-choose-line">
                    {product.productModifications_02.map(productMdf =>
                        <div
                            key={productMdf.id}
                            className={productMdf.mdfCurrent
                                ? 'product-mdf-txt product-mdf-item product-mdf-item-current'
                                : 'product-mdf-txt product-mdf-item'
                            }
                            onClick={(e) => {
                                product.promotionalPrice
                                    ?
                                    toggleProductMdf_02(productMdf.mdf, e, productMdf.mdfPrice, product.id, productMdf.promotionalMdfPrice)
                                    :
                                    toggleProductMdf_02(productMdf.mdf, e, productMdf.mdfPrice, product.id)
                            }}
                        >
                            {productMdf.mdf}
                        </div>
                    )}
                </div>
            </div>}
        </div>
    )
}

export default ProductModifications;
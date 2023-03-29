import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProductCreator } from '../../store/basketReducer';
import { resetDefaultCreator } from '../../store/catalogReducer';
import { resetCatalogCard } from '../../utils/products';
import { openSidebar } from '../../utils/toggleClass';
import HiddenBlock from './HiddenBlock';
import VisibleBlock from './VisibleBlock';

const CatalogCard = ({ style, sort, filterManufacturer, filterPrice, product, ...props }) => {
    const dispatch = useDispatch();
    const [productCharacteristics, setProductCharacteristics] = useState({
        color: null,
        mdf: null
    });

    useEffect(() => {
        const [currentPrice, currentPromotionalPrice, resetUrl_1, resetUrl_2] = resetCatalogCard(product);

        dispatch(resetDefaultCreator({
            id: product.id,
            resetUrl_1,
            resetUrl_2,
            currentPrice,
            currentPromotionalPrice
        }));
        const currentMdf1 = product.productModifications_01.find(element => element.mdfCurrent);
        if (product.mdfSub) {
            const currentMdf2 = product.productModifications_02.find(element => element.mdfCurrent)
            setProductCharacteristics({
                color: currentMdf1.mdf, mdf: currentMdf2.mdf
            })
        } else setProductCharacteristics({
            ...productCharacteristics, color: currentMdf1.mdf
        })
    }, [sort, filterManufacturer, filterPrice]);

    const addProductBasket = () => {
        dispatch(changeProductCreator({ product, count: 1, productCharacteristics }));
        openSidebar('basket');
    }

    return (
        <div
            className={
                !product.productModifications_02.length
                    ?
                    'card shortBefore'
                    :
                    'card'
            }
            {...props}
            style={{ ...style }}
        >
            <VisibleBlock product={
                {
                    productUrl_1: product.productUrl_1,
                    productUrl_2: product.productUrl_2,
                    title: product.title,
                    price: product.price,
                    promotionalPrice: product.promotionalPrice,
                    productName: product.productName
                }
            }
            />
            <HiddenBlock
                product={
                    {
                        productName: product.productName,
                        id: product.id,
                        productModifications_01: [...product.productModifications_01],
                        productModifications_02: [...product.productModifications_02],
                        promotionalPrice: product.promotionalPrice,
                        promotionalMdfPrice: product.promotionalMdfPrice,
                    }
                }
                addProductBasket={addProductBasket}
                setProductCharacteristics={setProductCharacteristics}
                productCharacteristics={productCharacteristics}
            />
        </div>
    )
}

export default CatalogCard;
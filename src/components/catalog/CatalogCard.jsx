import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetDefault } from '../../store/catalogReducer';
import HiddenBlock from './HiddenBlock';
import VisibleBlock from './VisibleBlock';

const CatalogCard = ({ style, product, ...props }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        let currentColor;
        product.productModifications_01.forEach(element => {
            if (element.mdfCurrent) currentColor = element.mdf;
        })

        const resetUrl_1 = product.productUrl_1.replace(/__(.*?)__/g, `__${currentColor}__`);
        let resetUrl_2 = null;
        if (product.productUrl_2 !== null) {
            resetUrl_2 = product.productUrl_2.replace(/__(.*?)__/g, `__${currentColor}__`);
        }

        let currentPrice;
        product.productModifications_02.forEach(element => {
            if (element.mdfCurrent) currentPrice = element.mdfPrice;
        })

        if (currentColor && currentPrice) dispatch(resetDefault({
            id: product.id,
            resetUrl_1,
            resetUrl_2,
            resetPrice: currentPrice,
        }))
    }, [])

    return (
        <div className="card" {...props} style={{ ...style }}>
            <VisibleBlock product={
                {
                    productUrl_1: product.productUrl_1,
                    productUrl_2: product.productUrl_2,
                    title: product.title,
                    price: product.price
                }
            } />
            <HiddenBlock product={
                {
                    productName: product.productName,
                    id: product.id,
                    productModifications_01: [...product.productModifications_01],
                    productModifications_02: [...product.productModifications_02],
                }
            } />
        </div>
    )
}

export default CatalogCard;
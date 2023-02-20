import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetDefault } from '../../store/catalogReducer';
import { resetCatalogCard } from '../../utils/products';
import HiddenBlock from './HiddenBlock';
import VisibleBlock from './VisibleBlock';

const CatalogCard = ({ style, product, ...props }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const [currentColor, currentPrice, resetUrl_1, resetUrl_2] = resetCatalogCard(product);

        if (currentColor && currentPrice) dispatch(resetDefault({
            id: product.id,
            resetUrl_1,
            resetUrl_2,
            resetPrice: currentPrice,
        }))
    }, [props.sort])

    return (
        <div className="card" {...props} style={{ ...style }}>
            <VisibleBlock product={
                {
                    productUrl_1: product.productUrl_1,
                    productUrl_2: product.productUrl_2,
                    title: product.title,
                    price: product.price,
                    promotionalPrice: product.promotionalPrice,
                }
            } />
            <HiddenBlock product={
                {
                    productName: product.productName,
                    id: product.id,
                    productModifications_01: [...product.productModifications_01],
                    productModifications_02: [...product.productModifications_02],
                    promotionalPrice: product.promotionalPrice,
                    promotionalMdfPrice: product.promotionalMdfPrice
                }
            } />
        </div>
    )
}

export default CatalogCard;
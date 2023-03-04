import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetDefault } from '../../store/catalogReducer';
import { resetCatalogCard } from '../../utils/products';
import HiddenBlock from './HiddenBlock';
import VisibleBlock from './VisibleBlock';

const CatalogCard = ({ style, sort, filterManufacturer, filterPrice, product, ...props }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const [mdf_01Current, currentPrice, resetUrl_1, resetUrl_2] = resetCatalogCard(product);

        if (mdf_01Current || currentPrice) dispatch(resetDefault({
            id: product.id,
            resetUrl_1,
            resetUrl_2,
            resetPrice: currentPrice,
        }))
    }, [sort, filterManufacturer, filterPrice])

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
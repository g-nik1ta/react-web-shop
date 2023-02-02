import React from 'react';
import HiddenBlock from './HiddenBlock';
import VisibleBlock from './VisibleBlock';

const CatalogCard = ({ style, product, ...props }) => {
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
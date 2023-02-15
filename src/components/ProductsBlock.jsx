import React from 'react';
import { useSelector } from 'react-redux';
import CatalogCard from './catalog/CatalogCard';

const ProductsBlock = () => {
    const catalog = useSelector(state => state.catalogReducer.catalog);

    return (
        <section className='products-block'>
            <div className="products-block-header">
                <h1 className='title'>Магазин</h1>
                <div className="sort-filter">
                    <span>Сортировка</span>
                </div>
            </div>
            <div className="products">
                {
                    catalog.map(product =>
                        <CatalogCard key={product.id} product={product} />
                    )
                }
            </div>
        </section>
    )
}

export default ProductsBlock;
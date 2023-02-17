import React from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import CatalogCard from './catalog/CatalogCard';

const ProductsBlock = ({filterPrice, sort, ...props}) => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedAndFiltredProducts = useProducts(catalog, sort, filterPrice);

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
                    sortedAndFiltredProducts.map(product =>
                        <CatalogCard key={product.id} product={product} />
                    )
                }
            </div>
        </section>
    )
}

export default ProductsBlock;
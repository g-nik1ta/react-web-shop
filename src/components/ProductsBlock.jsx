import React from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import { getChangeFilter, resetAllFilter } from '../utils/filter';
import CatalogCard from './catalog/CatalogCard';

const ProductsBlock = (props) => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedAndFiltredProducts = useProducts(catalog, props.filterPrice, props.filterManufacturer, props.sort);

    return (
        <section className='products-block'>
            <div className="header">
                <div className="header-block">
                    <h1 className='title'>Магазин</h1>
                    <div className="sort-filter">
                        <span>Сортировка</span>
                    </div>
                </div>
                {
                    !!(props.selectedPriceFilter || props.filterManufacturer.length) &&
                    <div className="selected-filter">
                        {props.selectedPriceFilter &&
                            <span className='filter' onClick={() => props.setSelectedPriceFilter(false)}>
                                {props.filterPrice.minValue.toLocaleString('ru')} ₴ - {props.filterPrice.maxValue.toLocaleString('ru')} ₴
                                <i></i>
                            </span>
                        }
                        {props.filterManufacturer.map(item =>
                            <span
                                data-manufacturer={item}
                                key={item}
                                className='filter'
                                onClick={(e) => props.setFilterManufacturer(getChangeFilter(e, props.filterManufacturer, true))}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                <i></i>
                            </span>
                        )}

                        <span
                            className='filter reset-filter'
                            onClick={() => resetAllFilter(props.setSelectedPriceFilter, props.setFilterManufacturer)}
                        >
                            Очистить фильтр
                        </span>
                    </div>
                }
            </div>
            <div className="products">
                {
                    sortedAndFiltredProducts.length
                        ?
                        sortedAndFiltredProducts.map(product =>
                            <CatalogCard key={product.id} product={product} />
                        )
                        :
                        <h1 style={{ fontSize: '25px' }} >По выбранным критериям продуктов не найдено.</h1>
                }
            </div>
        </section>
    )
}

export default ProductsBlock;
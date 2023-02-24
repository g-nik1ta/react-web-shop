import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import { getChangeFilter, resetAllFilter } from '../utils/filter';
import { getPageCount, getProductsPage } from '../utils/pages';
import CatalogCard from './catalog/CatalogCard';
import Loader from './UI/loader/Loader';
import Pagination from './UI/pagination/Pagination';
import MySelect from './UI/select/MySelect';

const ProductsBlock = (props) => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedAndFiltredProducts = useProducts(catalog, props.filterPrice, props.filterManufacturer, props.sort);

    const limit = 9;
    const totalPages = getPageCount(sortedAndFiltredProducts.length, limit);

    const sortOptions = [
        { value: 'cheapToExpansive', name: 'От дешевых к дорогим' },
        { value: 'expansiveToCheap', name: 'От дорогих к дешевым' },
        { value: 'novelties', name: 'Новинки' },
        { value: 'popular', name: 'Популярное' },
        { value: 'promotional', name: 'Акционные' },
    ]

    const changePage = (page) => {
        props.setPage(page);
        window.scrollTo({ top: 0 });
    }

    useEffect(() => {
        changePage(1);
    }, [props.filterPrice, props.filterManufacturer, props.sort])

    return (
        <section className='products-block'>
            <div className="header">
                <div className="header-block">
                    <h1 className='title'>Магазин</h1>
                    <div className="sort-filter">
                        <span>Сортировка</span>
                        <MySelect
                            value={(sortOptions.find(e => e.value === props.sort)).name}
                            onChange={selectedSort => props.setSort(selectedSort)}
                            options={sortOptions}
                        />
                    </div>
                </div>
                {
                    !!(props.selectedPriceFilter || props.filterManufacturer.length) &&
                    <div className="selected-filter">
                        {props.selectedPriceFilter &&
                            <span className='filter' onClick={() => {
                                props.setSelectedPriceFilter(false);
                                props.setFilterPrice({ minValue: props.priceBorder.minPrice, maxValue: props.priceBorder.maxPrice });
                            }}>
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
                            onClick={() => resetAllFilter(props.setSelectedPriceFilter, props.setFilterManufacturer, props.priceBorder, props.setFilterPrice)}
                        >
                            Очистить фильтр
                        </span>
                    </div>
                }
            </div>
            <div className="products">
                {
                    props.catalogError &&
                    <h1>Произошла ошибка!</h1>
                }
                {
                    props.isCatalogLoading
                        ?
                        <Loader scale={0.75} />
                        :
                        sortedAndFiltredProducts.length
                            ?
                            getProductsPage(sortedAndFiltredProducts, props.page, limit).map(product =>
                                <CatalogCard key={product.id} product={product} sort={props.sort} />
                            )
                            :
                            <h1 style={{ fontSize: '25px', paddingLeft: '10px' }} >По выбранным критериям продуктов не найдено.</h1>
                }
            </div>
            <Pagination page={props.page} changePage={(page) => changePage(page)} totalPages={totalPages} />
        </section>
    )
}

export default ProductsBlock;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import { getPageCount, getProductsPage } from '../utils/pages';
import CatalogCard from './catalog/CatalogCard';
import SelectedFilters from './SelectedFilters';
import Pagination from './UI/pagination/Pagination';
import MySelect from './UI/select/MySelect';

const ProductsBlock = (props) => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedAndFiltredProducts = useProducts(catalog, props.filterPrice, props.filterManufacturer, props.sort);

    const limit = 9;
    const totalPages = getPageCount(sortedAndFiltredProducts.length, limit);
    const [page, setPage] = useState(1);

    const sortOptions = [
        { value: 'cheapToExpansive', name: 'От дешевых к дорогим' },
        { value: 'expansiveToCheap', name: 'От дорогих к дешевым' },
        { value: 'novelties', name: 'Новинки' },
        { value: 'popular', name: 'Популярное' },
        { value: 'promotional', name: 'Акционные' },
    ]

    const changePage = (pageCount) => {
        setPage(pageCount);
        window.scrollTo({ top: 0 });
    }

    const limitedProducts = getProductsPage(sortedAndFiltredProducts, page, limit);

    useEffect(() => {
        changePage(1);
    }, [props.filterPrice, props.filterManufacturer, props.sort]);

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
                <SelectedFilters
                    setFilterPrice={props.setFilterPrice}
                    filterPrice={props.filterPrice}

                    filterManufacturer={props.filterManufacturer}
                    setFilterManufacturer={props.setFilterManufacturer}
                    priceBorder={props.priceBorder}
                />
            </div>
            <div className="products">
                {
                    sortedAndFiltredProducts.length
                        ?
                        limitedProducts.map(product =>
                            <CatalogCard
                                key={product.id}
                                product={product}
                                sort={props.sort}
                                filterPrice={props.filterPrice}
                                filterManufacturer={props.filterManufacturer}
                            />
                        )
                        :
                        <h1 style={{ fontSize: '25px', paddingLeft: '10px' }} >По выбранным критериям продуктов не найдено.</h1>
                }
            </div>
            <Pagination page={page} changePage={(page) => changePage(page)} totalPages={totalPages} />
        </section>
    )
}

export default ProductsBlock;
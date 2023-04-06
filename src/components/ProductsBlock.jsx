import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import { changeSortCreator } from '../store/sortFilterReducer';
import { getPageCount, getProductsPage } from '../utils/pages';
import { getIsPriceFilter } from '../utils/products';
import { openSidebar } from '../utils/toggleClass';
import CatalogCard from './catalog/CatalogCard';
import SelectedFilters from './SelectedFilters';
import Pagination from './UI/pagination/Pagination';
import MySelect from './UI/select/MySelect';

const ProductsBlock = () => {
    const { sort, filterManufacturer, filterPrice, priceBorder } = useSelector(state => state.sortFilterReducer);
    const currentCategory = useSelector(state => state.categoryReducer.currentCategory);
    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedAndFiltredProducts = useProducts(catalog, filterPrice, filterManufacturer, sort, currentCategory);

    const [limit, setLimit] = useState(9);
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
    }, [filterPrice, filterManufacturer, sort]);
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 800) {
                setLimit(8)
            } else setLimit(9)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='products-block'>
            <div className="header">
                <div className="header-block">
                    <h1 className='title'>
                        {
                            currentCategory
                                ?
                                currentCategory.title
                                :
                                "Магазин"
                        }
                    </h1>
                    <div className="sort-filter">
                        <span>Сортировка</span>
                        <MySelect
                            value={(sortOptions.find(e => e.value === sort)).name}
                            onChange={selectedSort => dispatch(changeSortCreator(selectedSort))}
                            options={sortOptions}
                        />
                        <div
                            className='filter-menu'
                            onClick={() => openSidebar('.sidebar-window.filter')}
                        ></div>
                    </div>
                </div>
                {
                    !!(getIsPriceFilter(filterPrice, priceBorder) || filterManufacturer.length) &&
                    <SelectedFilters
                        filterPrice={filterPrice}
                        filterManufacturer={filterManufacturer}
                        priceBorder={priceBorder}
                    />
                }
            </div>
            <div className="products">
                {
                    sortedAndFiltredProducts.length
                        ?
                        limitedProducts.map(product =>
                            <CatalogCard
                                key={product.id}
                                product={product}
                                sort={sort}
                                filterPrice={filterPrice}
                                filterManufacturer={filterManufacturer}
                            />
                        )
                        :
                        <h1 style={{ fontSize: '25px', paddingLeft: '10px' }} >
                            По выбранным критериям продуктов не найдено.
                        </h1>
                }
            </div>
            {
                (totalPages > 1) &&
                <Pagination
                    page={page}
                    changePage={(page) => changePage(page)}
                    totalPages={totalPages}
                />
            }
        </section>
    )
}

export default ProductsBlock;
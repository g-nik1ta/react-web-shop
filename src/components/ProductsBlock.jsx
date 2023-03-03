import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsPageImageCreator } from '../store/catalogReducer';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { useProducts } from '../hooks/useProducts';
import { getChangeFilter, resetAllFilter } from '../utils/filter';
import { getPageCount, getProductsPage } from '../utils/pages';
import { setDataImgProduct } from '../utils/products';
import CatalogCard from './catalog/CatalogCard';
import Pagination from './UI/pagination/Pagination';
import MySelect from './UI/select/MySelect';

const ProductsBlock = (props) => {
    const dispatch = useDispatch();
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

    const limitedProducts = getProductsPage(sortedAndFiltredProducts, props.page, limit);
    const limitedProductsTitles = [];
    limitedProducts.forEach(item => {
        limitedProductsTitles.push(item.productName)
    })

    const [fetchPostsImage, isImageLoading, imageError] = useFetching(async (limitedProductsTitles) => {
        const response = await PostService.getAllImage(limitedProductsTitles);
        response.forEach(item => {
            const dataImg = setDataImgProduct(item);
            dispatch(addProductsPageImageCreator({
                productName: item.folderName,
                dataImg
            }));
        })
    })

    useEffect(() => {
        fetchPostsImage(limitedProductsTitles);
    }, [props.page])

    useEffect(() => {
        changePage(1);
    }, [props.filterPrice, props.filterManufacturer, props.sort]);

    if (imageError) {
        console.log(imageError)

        return (
            <div style={{
                height: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>Произошла ошибка!</h1>
            </div>
        )
    } 

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
                    sortedAndFiltredProducts.length
                        ?
                        limitedProducts.map(product =>
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
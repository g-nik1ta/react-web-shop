import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsBlock from '../components/ProductsBlock';
import Sidebar from '../components/sidebar/Sidebar';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { getPriceBorder } from '../utils/filter';

const CategoryShop = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.category);
    const currentCategory = category.find(item => item.urlParam === params.category);

    const catalog = useSelector(state => state.catalogReducer.catalog);
    const [sort, setSort] = useState('popular');
    const priceBorder = getPriceBorder(catalog)
    const [filterPrice, setFilterPrice] = useState({
        minValue: priceBorder.minPrice, maxValue: priceBorder.maxPrice
    });
    const [filterManufacturer, setFilterManufacturer] = useState([])

    useEffect(() => {
        window.scrollTo({ top: 0 });
        if (category.length) {
            dispatch(changeArrCreator([
                { routeItem: 'Магазин', path: `/shop` },
                { routeItem: currentCategory.title, path: `/shop/category/${currentCategory.urlParam}` },
            ]))
        }
    }, [params]);
    return (
        <>
            <RoutePanel />
            <div className='shop_container row'>
                <Sidebar
                    priceBorder={priceBorder}
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}

                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    sort={sort}
                    currentCategory={currentCategory}
                />
                <ProductsBlock
                    priceBorder={priceBorder}
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}

                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    sort={sort}
                    setSort={setSort}
                    currentCategory={currentCategory}
                />
            </div>
        </>
    )
}

export default CategoryShop;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsBlock from '../components/ProductsBlock';
import Sidebar from '../components/sidebar/Sidebar';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { getPriceBorder } from '../utils/filter';

const Shop = () => {
    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalogReducer.catalog);

    const [sort, setSort] = useState('popular');

    const priceBorder = getPriceBorder(catalog)
    const [filterPrice, setFilterPrice] = useState({
        minValue: priceBorder.minPrice, maxValue: priceBorder.maxPrice
    });

    const [filterManufacturer, setFilterManufacturer] = useState([])

    useEffect(() => {
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop' }
        ]))
    }, []);
    
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
                />
                <ProductsBlock
                    priceBorder={priceBorder}
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}

                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    sort={sort}
                    setSort={setSort}
                />
            </div>
        </>
    )
}

export default Shop;
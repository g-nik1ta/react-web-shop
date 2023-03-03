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
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(false)

    const priceBorder = getPriceBorder(catalog)
    const [filterPrice, setFilterPrice] = useState({
        minValue: priceBorder.minPrice, maxValue: priceBorder.maxPrice
    });

    const [filterManufacturer, setFilterManufacturer] = useState([])
    const [page, setPage] = useState(1);

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
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}
                    priceBorder={priceBorder}
                    sort={sort}

                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    setSelectedPriceFilter={setSelectedPriceFilter}
                />
                <ProductsBlock
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}
                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    sort={sort}
                    setSort={setSort}

                    selectedPriceFilter={selectedPriceFilter}
                    setSelectedPriceFilter={setSelectedPriceFilter}
                    priceBorder={priceBorder}

                    page={page}
                    setPage={setPage}
                />
            </div>
        </>
    )
}

export default Shop;
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

    const [sort, setSort] = useState('');
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(false)

    const priceBorder = getPriceBorder(catalog)
    const [filterPrice, setFilterPrice] = useState({
        minValue: priceBorder.minPrice, maxValue: priceBorder.maxPrice
    });
    const [filterManufacturer, setFilterManufacturer] = useState([])
    const manufacturerList = catalog.map(product => product.manufacturer);

    useEffect(() => {
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop' }
        ]))
    }, [])

    return (
        <>
            <RoutePanel />
            <div className='shop_container row'>
                <Sidebar
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}
                    priceBorder={priceBorder}

                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    manufacturerList={manufacturerList}

                    setSelectedPriceFilter={setSelectedPriceFilter}
                />
                <ProductsBlock 
                    filterPrice={filterPrice} 
                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}
                    sort={sort}

                    selectedPriceFilter={selectedPriceFilter}
                    setSelectedPriceFilter={setSelectedPriceFilter}
                />
            </div>
        </>
    )
}

export default Shop;
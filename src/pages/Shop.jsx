import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsBlock from '../components/ProductsBlock';
import Sidebar from '../components/sidebar/Sidebar';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { getPriceBorder } from '../utils/filter';
import PostService from '../API/PostService';
import { addAllCatalogCreator } from '../store/catalogReducer';
import { useFetching } from '../hooks/useFetching';

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

    const [fetchPosts, isCatalogLoading, catalogError] = useFetching(async () => {
		const response = await PostService.getAll();
        dispatch(addAllCatalogCreator(response))
	})

    useEffect(() => {
		fetchPosts();
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
                    sort={sort}

                    filterManufacturer={filterManufacturer}
                    setFilterManufacturer={setFilterManufacturer}

                    setSelectedPriceFilter={setSelectedPriceFilter}

                    isCatalogLoading={isCatalogLoading}
                    catalogError={catalogError}
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

                    isCatalogLoading={isCatalogLoading}
                    catalogError={catalogError}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </>
    )
}

export default Shop;
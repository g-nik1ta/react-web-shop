import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsBlock from '../components/ProductsBlock';
import Sidebar from '../components/sidebar/Sidebar';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { setCurrentCategoryCreator, setParamsCreator } from '../store/categoryReducer';
import { changeArrCreator } from '../store/routePanelReducer';
import { setPriceBorderCreator } from '../store/sortFilterReducer';
import { getPriceBorder } from '../utils/filter';

const Shop = () => {
    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalogReducer.catalog);

    useEffect(() => {
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop' }
        ]));
        dispatch(setCurrentCategoryCreator(null))
        dispatch(setPriceBorderCreator(getPriceBorder(catalog)))
        dispatch(setParamsCreator({category: null}))
    }, []);
    
    return (
        <>
            <RoutePanel />
            <div className='shop_container row'>
                <Sidebar />
                <ProductsBlock />
            </div>
        </>
    )
}

export default Shop;
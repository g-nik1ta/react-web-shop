import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsBlock from '../components/ProductsBlock';
import Sidebar from '../components/sidebar/Sidebar';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop' }
        ]))
    }, [])

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
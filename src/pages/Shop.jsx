import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeArrCreator([
            {routeItem: 'Магазин', path: '/shop'}
        ]))
    })
    
    return (
        <>
            <RoutePanel/>
        </>
    )
}

export default Shop;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Blog from '../components/Blog';
import Catalog from '../components/catalog/Catalog';
import Category from '../components/Category';
import Discounts from '../components/Discounts';
import SimpleSlider from '../components/SimpleSlider';
import { changeArrCreator } from '../store/routePanelReducer';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeArrCreator([
            {routeItem: 'Главная', path: '/home'}
        ]))
    }, [])

    return (
        <>
            <SimpleSlider/>
			<Category/>
			<Discounts/>
			<Catalog/>
			<Blog/>
        </>
    )
}

export default Home;
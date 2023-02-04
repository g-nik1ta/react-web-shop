import React from 'react';
import Blog from '../components/Blog';
import Catalog from '../components/catalog/Catalog';
import Category from '../components/Category';
import Discounts from '../components/Discounts';
import SimpleSlider from '../components/SimpleSlider';

const Home = () => {
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
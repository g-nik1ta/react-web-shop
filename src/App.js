import React from 'react';
import './styles/App.css';
import MyNavbar from './components/UI/navbar/MyNavbar';
import MyHeader from './components/UI/header/MyHeader';
import SimpleSlider from './components/SimpleSlider';
import Category from './components/Category';
import Discounts from './components/Discounts';
import Catalog from './components/catalog/Catalog';
import Blog from './components/Blog';

function App() {
	return (
		<div className='app'>
			<MyHeader/>
            <MyNavbar/>
			<SimpleSlider/>
			<Category/>
			<Discounts/>
			<Catalog/>
			<Blog/>
		</div>
	)
}

export default App;

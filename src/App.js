import React from 'react';
import './styles/App.css';
import MyNavbar from './components/UI/navbar/MyNavbar';
import MyHeader from './components/UI/header/MyHeader';
import SimpleSlider from './components/SimpleSlider';
import Category from './components/Category';
import Discounts from './components/Discounts';
import Catalog from './components/catalog/Catalog';
import Blog from './components/Blog';
import MyFooter from './components/UI/footer/MyFooter';

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
			<MyFooter/>
		</div>
	)
}

export default App;

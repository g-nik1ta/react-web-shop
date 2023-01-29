import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/UI/navbar/MyNavbar';
import MyHeader from './components/UI/header/MyHeader';
import SimpleSlider from './components/SimpleSlider';
import Category from './components/Category';

function App() {
	return (
		<BrowserRouter>
			<MyHeader/>
            <MyNavbar/>
			<SimpleSlider/>
			<Category/>
		</BrowserRouter>
	)
}

export default App;

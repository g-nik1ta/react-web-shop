import React from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Header from './components/UI/header/Header';
import Navbar from './components/UI/navbar/Navbar';
import Footer from './components/UI/footer/Footer';

function App() {
	return (
		<div className='app'>
			<Header/>
            <Navbar/>
			<AppRouter/>
			<Footer/>
		</div>
	)
}

export default App;

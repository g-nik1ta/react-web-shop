import React from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarLogin from './components/sidebarLogin/SidebarLogin';

function App() {
	return (
		<div className='app'>
			<Header/>
            <Navbar/>
			<SidebarLogin/>
			<AppRouter/>
			<Footer/>
		</div>
	)
}

export default App;

import React from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarLogin from './components/sidebarLogin/SidebarLogin';
import SidebarBasket from './components/sidebarBasket/SidebarBasket';
import SidebarNav from './components/SidebarNav';

function App() {
	return (
		<>
			<SidebarNav />
			<div className='app'>
				<Header />
				<Navbar />
				<SidebarLogin />
				<SidebarBasket />
				<AppRouter />
				<Footer />
			</div>
		</>
	)
}

export default App;

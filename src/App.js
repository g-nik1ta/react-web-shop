import React from 'react';
import './styles/App.css';
import MyNavbar from './components/UI/navbar/MyNavbar';
import MyHeader from './components/UI/header/MyHeader';
import MyFooter from './components/UI/footer/MyFooter';
import AppRouter from './components/AppRouter';

function App() {
	return (
		<div className='app'>
			<MyHeader/>
            <MyNavbar/>
			<AppRouter/>
			<MyFooter/>
		</div>
	)
}

export default App;

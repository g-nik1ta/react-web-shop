import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Widgets from './components/Widgets';
import SimpleSlider from './components/SimpleSlider';

function App() {
	return (
		<BrowserRouter>
			<Widgets/>
			<SimpleSlider/>
		</BrowserRouter>
	)
}

export default App;

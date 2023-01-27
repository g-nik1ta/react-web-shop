import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Widgets from './components/Widgets';

function App() {
	return (
		<BrowserRouter>
			<Widgets/>
			<h1>hello world</h1>
		</BrowserRouter>
	)
}

export default App;

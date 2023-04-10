import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App />
        </HashRouter>
    </Provider>
);
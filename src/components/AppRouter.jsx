import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../route';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => 
                <Route
                    exact={route.exact}
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}
        </Routes>
    )
}

export default AppRouter;
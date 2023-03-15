import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { routes } from '../route';
import { addAllCatalogCreator } from '../store/catalogReducer';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const dispatch = useDispatch();
    const [fetchPosts, isCatalogLoading, catalogError] = useFetching(async () => {
        const response = await PostService.getAll();
        dispatch(addAllCatalogCreator(response))
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    if (catalogError) {
        return (
            <div style={{
                height: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>Произошла ошибка!</h1>
            </div>
        )
    }

    if (isCatalogLoading) {
        return <Loader scale={.85} style={{ height: '70vh' }} />
    }

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
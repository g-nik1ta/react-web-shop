import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Blog from '../components/Blog';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const BlogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Блог', path: `/blog` },
        ]))
    }, []);

    return (
        <>
            <RoutePanel />
            <Blog titleStyle={{textAlign: 'left', margin: '30px 0 30px 15px', fontSize: '35px'}} />
        </>
    )
}

export default BlogPage;
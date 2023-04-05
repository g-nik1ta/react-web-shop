import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsBlock from '../components/ProductsBlock';
import Sidebar from '../components/sidebar/Sidebar';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { setCurrentCategoryCreator, setParamsCreator } from '../store/categoryReducer';
import { changeArrCreator } from '../store/routePanelReducer';
import { setPriceBorderCreator } from '../store/sortFilterReducer';
import { getPriceBorder } from '../utils/filter';

const CategoryShop = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.category);
    const currentCategory = category.find(item => item.urlParam === params.category);
    const catalog = useSelector(state => state.catalogReducer.catalog);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        if (category.length) {
            dispatch(changeArrCreator([
                { routeItem: 'Магазин', path: `/shop` },
                { routeItem: currentCategory.title, path: `/shop/category/${currentCategory.urlParam}` },
            ]))
        }
        dispatch(setCurrentCategoryCreator(currentCategory))
        dispatch(setPriceBorderCreator(getPriceBorder(catalog)))
        dispatch(setParamsCreator(params))
    }, [params]);

    return (
        <>
            <RoutePanel />
            <div className='shop_container row'>
                <Sidebar />
                <ProductsBlock />
            </div>
        </>
    )
}

export default CategoryShop;
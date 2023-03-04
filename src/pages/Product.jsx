import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/UI/loader/Loader';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.catalogReducer.catalog).find(element => params.name === element.productName)

    console.log(product)
    console.log(params.name)

    useEffect(() => {
        product && dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop/' },
            { routeItem: params.name, path: `/shop/${product.title}` },
        ]))
    }, []);

    if (!product) {
        return <Loader scale={.85} style={{ height: '70vh' }}/>
    }

    return (
        <>
            <RoutePanel />
            <div className='product_container'>
                <div className='product_content row'>
                    <div>
                        {product.title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
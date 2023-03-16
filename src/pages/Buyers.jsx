import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const Buyers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeArrCreator([
            { routeItem: 'Покупателям', path: `/buyers` },
        ]))
    }, []);

    return (
        <>
            <RoutePanel />
            <section className='buyers row'>
                <h1 className="title">Покупателям</h1>
                <div className="card__wrapper">
                    <Link to="/buyers/about" className="card-buyers">
                        <img src={require('../assets/buyers/about.jpg')} alt="img" />
                        <div className='card-name'>
                            О нас
                            <span className='btn-arrow'>→</span>
                        </div>
                    </Link>
                    <Link to="/buyers/shipping-and-payment" className="card-buyers">
                        <img src={require('../assets/buyers/shipping-and-payment.jpg')} alt="img" />
                        <div className='card-name'>
                            Доставка и оплата
                            <span className='btn-arrow'>→</span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Buyers;
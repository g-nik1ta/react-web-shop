import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FeedbackForm from '../components/FeedbackForm';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Контакты', path: `/contacts` },
        ]))
    }, []);

    return (
        <>
            <RoutePanel />
            <section className='contacts row'>
                <h1 className="title">Контакты</h1>
                <div className="contacts-content">
                    <div className="contact">
                        <h3 className='subtitle'>
                            Позвонить нам
                        </h3>
                        <a className='item' href="tel:+380996567454">+38 (099) 656 74 54</a>
                        <a className='item' href="tel:+380664322275">+38 (066) 432 22 75</a>
                        <a className='item' href="tel:+380509595205">+38 (050) 959 52 05</a>
                        <h3 className='subtitle'>
                            Электронная почта
                        </h3>
                        <a className='item' href="mailto:support@support.com.ua">support@support.com.ua</a>
                        <h3 className='subtitle'>
                            Адрес офиса
                        </h3>
                        <p className='item'>г.Киев, ул.Киевская</p>
                    </div>
                    <div className="feedback">
                        <h3 className='subtitle'>
                            Обратная связь
                        </h3>
                        <FeedbackForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;
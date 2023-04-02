import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';

const About = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Покупателям', path: '/buyers' },
            { routeItem: 'О нас', path: '/buyers/about' },
        ]))
    }, []);

    return (
        <>
            <RoutePanel />
            <section className='about row'>
                <h1 className="title">О нас</h1>
                <div className="about_content">
                    <h4 className='subtitle'>
                        История
                    </h4>
                    <p>
                        Наш интернет-магазин специализируется на продаже качественной электроники, <strong>в том числе техники Apple</strong>, а также на аксессуарах для гаджетов.
                    </p>
                    <p>
                        Мы работаем на рынке электроники уже <strong>более 7 лет</strong> и за это время зарекомендовали себя как надежный продавец.
                    </p>
                    <p>
                        Мы стремимся предоставить нашим клиентам только самые новые и лучшие модели телефонов, ноутбуков, планшетов и других устройств.
                    </p>
                    <p>
                        <strong>Наша команда состоит из опытных специалистов</strong>, которые всегда готовы помочь нашим клиентам с выбором, ответить на все вопросы и обеспечить высококачественное обслуживание.
                    </p>
                    <h4 className='subtitle'>
                        Почему выгодно работать с нами:
                    </h4>
                    <ul>
                        <li className="item">Широкий ассортимент техники Apple и других брендов.</li>
                        <li className="item">Оригинальную продукцию по доступным ценам.</li>
                        <li className="item">Гарантию на все товары.</li>
                        <li className="item">Бесплатную доставку при заказе на определенную сумму.</li>
                        <li className="item">Быстрый и удобный поиск по каталогу.</li>
                        <li className="item">Простой и безопасный процесс оформления заказа.</li>
                        <li className="item">Оперативную обработку заказов и отправку в течение 24 часов.</li>
                        <li className="item">Возможность оплаты наличными или банковской картой.</li>
                    </ul>
                    <p>
                        Мы постоянно следим за обновлениями и новинками в мире электроники, чтобы наши клиенты всегда были в курсе последних тенденций. 
                        <strong> Наша миссия - обеспечить нашим клиентам самый лучший опыт покупок</strong>, и мы делаем все возможное, чтобы это достичь.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;
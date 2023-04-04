import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const SidebarNav = () => {
    const sidebarWrapperRef = useRef();
    const toggleBuyersWindow = () => {
        sidebarWrapperRef.current.classList.toggle('submenu-open')
    }

    return (
        <div className='sidebar-nav'>
            <div className="sidebar-wrapper" ref={sidebarWrapperRef}>
                <div className="sidebar-content">
                    <ul>
                        <h1 className="title">Меню</h1>
                        <li>
                            <Link to='/home'>Главная</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Магазин</Link>
                        </li>
                        <li className='buyers-nav'>
                            <Link to='/buyers'>Покупателям</Link>
                            <span onClick={toggleBuyersWindow}></span>
                        </li>
                        <li>
                            <Link to='/blog'>Блог</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-content">
                    <ul>
                        <div className='buyers-nav-header'>
                            <span onClick={toggleBuyersWindow}></span>
                            <Link to='/buyers'>Покупателям</Link>
                        </div>
                        <li>
                            <Link to='/buyers/about'>О нас</Link>
                        </li>
                        <li>
                            <Link to='/buyers/shipping-and-payment'>Доставка и оплата</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarNav;
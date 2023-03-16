import React from 'react';
import { Link } from 'react-router-dom';
import MySelectV2 from '../select_v2/MySelectV2';
import cls from './Navbar.module.css';

const Navbar = () => {
    const pageOptions = [
        { value: 'about', name: 'О нас' },
        { value: 'shipping-and-payment', name: 'Доставка и оплата' },
    ]

    return (
        <nav className={cls.nav__wrapper}>
            <div className={`${cls.nav__content} row`}>
                <Link to='/home' className={cls.nav__item}>Главная</Link>
                <Link to='/shop' className={cls.nav__item}>Магазин</Link>
                <MySelectV2 options={pageOptions} />
                <Link to='/blog' className={cls.nav__item}>Блог</Link>
                <Link to='/contacts' className={cls.nav__item}>Контакты</Link>
            </div>
        </nav>
    )
}

export default Navbar;
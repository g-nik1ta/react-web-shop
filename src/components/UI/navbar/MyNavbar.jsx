import React from 'react';
import { Link } from 'react-router-dom';
import cls from './MyNavbar.module.css';

const MyNavbar = () => {
    return (
        <nav className={cls.nav__wrapper}>
            <div className={`${cls.nav__content} row`}>
                <Link to="/home" className={cls.nav__item}>Главная</Link>
                <Link to="/shop" className={cls.nav__item}>Магазин</Link>
                <Link to="/blog" className={cls.nav__item}>Блог</Link>
                <Link to="/contacts" className={cls.nav__item}>Контакты</Link>
            </div>
        </nav>
    )
}

export default MyNavbar;
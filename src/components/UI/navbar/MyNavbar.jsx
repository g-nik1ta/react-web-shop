import React from 'react';
import cls from './MyNavbar.module.css';

const MyNavbar = () => {
    return (
        <nav className={cls.nav__wrapper}>
            <div className={`${cls.nav__content} row`}>
                <span className={cls.nav__item}>Главная</span>
                <span className={cls.nav__item}>Магазин</span>
                <span className={cls.nav__item}>Блог</span>
                <span className={cls.nav__item}>Контакты</span>
            </div>
        </nav>
    )
}

export default MyNavbar;
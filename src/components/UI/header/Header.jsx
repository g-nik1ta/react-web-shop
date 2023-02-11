import React from 'react';
import Search from '../search/Search';
import cls from './Header.module.css';

const Header = () => {
    return (
        <header className={cls.header__wrapepr}>
            <div className={`${cls.header__content} row`}>
                <a href='' className={cls.logo}>
                    <strong>Tech </strong>
                    world
                </a>
                <Search/>
            </div>
        </header>
    )
}

export default Header;
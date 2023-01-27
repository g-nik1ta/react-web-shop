import React from 'react';
import MySearch from '../search/MySearch';
import cls from './MyHeader.module.css';

const MyHeader = () => {
    return (
        <header className={cls.header__wrapepr}>
            <div className={`${cls.header__content} row`}>
                <a href='' className={cls.logo}>
                    <strong>Tech </strong>
                    world
                </a>
                <MySearch/>
            </div>
        </header>
    )
}

export default MyHeader;
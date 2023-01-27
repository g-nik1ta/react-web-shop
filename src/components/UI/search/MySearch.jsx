import React from 'react';
import cls from './MySearch.module.css';

const MySearch = () => {
    return (
        <div className={cls.search__container}>
            <input type="search" placeholder='Поиск' className={cls.search} />

        </div>
    )
}

export default MySearch;
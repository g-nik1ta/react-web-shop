import React from 'react';
import cls from './Search.module.css';

const Search = () => {
    return (
        <div className={cls.search__container}>
            <input type="search" placeholder='Поиск' className={cls.search} />

        </div>
    )
}

export default Search;
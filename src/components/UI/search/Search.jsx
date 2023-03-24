import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchMenu from '../../SearchMenu';
import cls from './Search.module.css';

const Search = () => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const [searchValue, setSearchValue] = useState('');
    const [filtredCatalog, setFiltredCatalog] = useState([]);

    useEffect(() => {
        if (searchValue.trim()) {
            setFiltredCatalog(
                catalog.filter(item => {
                    return item.title.toLowerCase().split(' ').join('').includes(searchValue.toLocaleLowerCase().split(' ').join(''));
                })
            )
        } else setFiltredCatalog([])
    }, [searchValue])

    return (
        <div className={cls.search__container}>
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                type="search"
                placeholder='Поиск'
                className={cls.search}
            />
            {
                !!filtredCatalog.length &&
                <SearchMenu filtredCatalog={filtredCatalog} />
            }
        </div>
    )
}

export default Search;
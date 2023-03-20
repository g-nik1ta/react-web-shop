import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <div className={cls.searchMenu}>
                    {
                        filtredCatalog.map(item =>
                            <div key={item.id} className={cls.productCard}>
                                <Link to={`/shop/${item.productName}`}>
                                    <h4 className={cls.title}>{item.title}</h4>
                                </Link>
                                <div className={cls.description}>
                                    <img
                                        src={item.productUrl_1}
                                        alt={item.productName}
                                        className={cls.productUrl}
                                    />
                                    <div className={cls.priceBlock}>
                                        {
                                            item.promotionalPrice === null
                                                ?
                                                <p className={cls.price}>
                                                    {(Number(item.price)).toLocaleString('ru')} ₴
                                                </p>
                                                :
                                                <p className={cls.promotionalPrice}>
                                                    <span>
                                                        {(Number(item.price)).toLocaleString('ru')} ₴
                                                    </span>
                                                    {(Number(item.promotionalPrice)).toLocaleString('ru')} ₴
                                                </p>
                                        }
                                        <span className={cls.available}>В наличии</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Search;
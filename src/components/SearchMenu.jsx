import React from 'react';
import { Link } from 'react-router-dom';

const SearchMenu = ({ filtredCatalog }) => {
    return (
        <div className="searchMenu">
            {
                !!filtredCatalog.length
                    ?
                    filtredCatalog.map(item =>
                        <div key={item.id} className="product-card">
                            <Link to={`/shop/${item.productName}`}>
                                <h4 className="title">{item.title}</h4>
                            </Link>
                            <div className="description">
                                <img
                                    src={item.productUrl_1}
                                    alt={item.productName}
                                    className="productUrl"
                                />
                                <div className="price-block">
                                    {
                                        item.promotionalPrice === null
                                            ?
                                            <p className="price">
                                                {(Number(item.price)).toLocaleString('ru')} ₴
                                            </p>
                                            :
                                            <p className="promotionalPrice">
                                                <span>
                                                    {(Number(item.price)).toLocaleString('ru')} ₴
                                                </span>
                                                {(Number(item.promotionalPrice)).toLocaleString('ru')} ₴
                                            </p>
                                    }
                                    <span className="available">В наличии</span>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <p>
                        По вашему запросу ничего не найдено...
                    </p>
            }
        </div>
    )
}

export default SearchMenu;
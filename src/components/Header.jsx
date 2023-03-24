import React from 'react';
import Search from './UI/search/Search';
import Basket from './UI/basket/Basket';
import Auth from './UI/auth/Auth';

const Header = () => {
    return (
        <header className="header-wrapepr">
            <div className="header-content row">
                <a href='' className="logo">
                    <strong>Tech </strong>
                    world
                </a>
                <Search />
                <Auth/>
                <Basket />
            </div>
        </header>
    )
}

export default Header;
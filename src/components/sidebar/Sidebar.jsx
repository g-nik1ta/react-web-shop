import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import Loader from '../UI/loader/Loader';
import FilterManufacturer from './FilterManufacturer';
import FilterPrice from './FilterPrice';

const Sidebar = (props) => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedAndFiltredProducts = useProducts(catalog, props.filterPrice, props.filterManufacturer, props.sort);
    const manufacturerList = sortedAndFiltredProducts.map(product => product.manufacturer);
    const fullManufacturerList = catalog.map(product => product.manufacturer);

    return (
        <aside className='sidebar'>
            <div className="category-block">
                <Link to="/new">Новинки</Link>
                <Link to="/iphone">iPhone</Link>
                <Link to="/iwatch">iWatch</Link>
                <Link to="/accessories">Аксессуары</Link>
            </div>
            <div className="filter-block">
                <h3 className='title'>Фильтры</h3>
                <FilterPrice
                    filterPrice={props.filterPrice}
                    setFilterPrice={props.setFilterPrice}
                    priceBorder={props.priceBorder}

                    setSelectedPriceFilter={props.setSelectedPriceFilter}
                />
                <FilterManufacturer
                    filterManufacturer={props.filterManufacturer}
                    setFilterManufacturer={props.setFilterManufacturer}
                    manufacturerList={manufacturerList}
                    fullManufacturerList={fullManufacturerList}
                />
            </div>
        </aside>
    )
}

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import FilterManufacturer from './FilterManufacturer';
import FilterPrice from './FilterPrice';

const Sidebar = (props) => {
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
                    manufacturerList={props.manufacturerList}
                />
            </div>
        </aside>
    )
}

export default Sidebar;
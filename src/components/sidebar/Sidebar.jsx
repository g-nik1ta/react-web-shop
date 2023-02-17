import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FilterManufacturer from './FilterManufacturer';
import FilterPrice from './FilterPrice';

const Sidebar = (props) => {
    const hiddenFields = (e, visibleBlockRef) => {
        e.target.classList.toggle("up");
        e.target.classList.toggle("down");
        visibleBlockRef.current.classList.toggle("hidden");
    }

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
                    hiddenFields={hiddenFields} 
                    filterPrice={props.filterPrice} 
                    setFilterPrice={props.setFilterPrice}
                    priceBorder={props.priceBorder}
                />
                <FilterManufacturer hiddenFields={hiddenFields} />
            </div>
        </aside>
    )
}

export default Sidebar;
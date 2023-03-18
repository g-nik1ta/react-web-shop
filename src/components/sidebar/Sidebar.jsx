import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import FilterManufacturer from './FilterManufacturer';
import FilterPrice from './FilterPrice';

const Sidebar = (props) => {
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const category = useSelector(state => state.categoryReducer.category);
    const manufacturerList = useProducts(catalog, props.filterPrice, props.filterManufacturer, props.sort, props.currentCategory, true).map(product => product.manufacturer);
    const fullManufacturerList = catalog.map(product => product.manufacturer);

    const isBold = (title) => {
        if (props.currentCategory) {
            if (props.currentCategory.title == title) {
                return (<b>{title}</b>)
            } else {
                return title
            }
        }
        return title
    }

    return (
        <aside className='sidebar'>
            <div className="category-block">
                {
                    category.map(item =>
                        <Link to={`/shop/category/${item.urlParam}`} key={item.id}>
                            {isBold(item.title)}
                        </Link>
                    )
                }
            </div>
            <div className="filter-block">
                <h3 className='title'>Фильтры</h3>
                <FilterPrice
                    filterPrice={props.filterPrice}
                    setFilterPrice={props.setFilterPrice}
                    priceBorder={props.priceBorder}
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
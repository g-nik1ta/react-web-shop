import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import FilterManufacturer from './FilterManufacturer';
import FilterPrice from './FilterPrice';

const Sidebar = (props) => {
    const { sort, filterManufacturer, filterPrice } = useSelector(state => state.sortFilterReducer);
    const params = useParams();
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const category = useSelector(state => state.categoryReducer.category);
    const manufacturerList = useProducts(catalog, filterPrice, filterManufacturer, sort, props.currentCategory, true).map(product => product.manufacturer);
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
                    params.category &&
                    <div className='all-category'>
                        <Link to="/shop">
                            <span>Все категории</span>
                        </Link>
                    </div>
                }
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
                <FilterPrice filterPrice={filterPrice} />
                <FilterManufacturer
                    filterManufacturer={filterManufacturer}
                    manufacturerList={manufacturerList}
                    fullManufacturerList={fullManufacturerList}
                />
            </div>
        </aside>
    )
}

export default Sidebar;
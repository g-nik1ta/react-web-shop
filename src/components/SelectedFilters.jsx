import React from 'react';
import { getChangeFilter, resetAllFilter } from '../utils/filter';
import { getCamelCase, getIsPriceFilter } from '../utils/products';

const SelectedFilters = (props) => {
    return (
        <div className="selected-filter">
            {getIsPriceFilter(props.filterPrice, props.priceBorder) &&
                <span className='filter' onClick={() => props.setFilterPrice({ minValue: props.priceBorder.minPrice, maxValue: props.priceBorder.maxPrice })}>
                    {props.filterPrice.minValue.toLocaleString('ru')} ₴ - {props.filterPrice.maxValue.toLocaleString('ru')} ₴
                    <i></i>
                </span>
            }
            {props.filterManufacturer.map(item =>
                <span
                    data-manufacturer={item}
                    key={item}
                    className='filter'
                    onClick={(e) => props.setFilterManufacturer(getChangeFilter(e, props.filterManufacturer, true))}
                >
                    {getCamelCase(item)}
                    <i></i>
                </span>
            )}
            <span
                className='filter reset-filter'
                onClick={() => resetAllFilter(props.setFilterManufacturer, props.priceBorder, props.setFilterPrice)}
            >
                Очистить фильтр
            </span>
        </div>
    )
}

export default SelectedFilters;
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeManufacturerFilterCreator, resetAllFitersCreator, resetPriceBorderCreator } from '../store/sortFilterReducer';
import { getChangeFilter, resetAllFilter } from '../utils/filter';
import { getCamelCase, getIsPriceFilter } from '../utils/products';

const SelectedFilters = (props) => {
    const dispatch = useDispatch();

    const resetAllFilters = () => {
        resetAllFilter()
        dispatch(resetAllFitersCreator())
    }

    const changeManufacturerFilter = (e) => {
        dispatch(changeManufacturerFilterCreator(getChangeFilter(e, props.filterManufacturer, true)));
    }

    return (
        <div className="selected-filter">
            {getIsPriceFilter(props.filterPrice, props.priceBorder) &&
                <span className='filter' onClick={() => dispatch(resetPriceBorderCreator())}>
                    {props.filterPrice.minValue.toLocaleString('ru')} ₴ - {props.filterPrice.maxValue.toLocaleString('ru')} ₴
                    <i></i>
                </span>
            }
            {props.filterManufacturer.map(item =>
                <span
                    data-manufacturer={item}
                    key={item}
                    className='filter'
                    onClick={(e) => changeManufacturerFilter(e)}
                >
                    {getCamelCase(item)}
                    <i></i>
                </span>
            )}
            <span
                className='filter reset-filter'
                onClick={resetAllFilters}
            >
                Очистить фильтр
            </span>
        </div>
    )
}

export default SelectedFilters;
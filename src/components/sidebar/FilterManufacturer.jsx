import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeManufacturerFilterCreator } from '../../store/sortFilterReducer';
import { getChangeFilter, getCountsManufacturerList } from '../../utils/filter';
import { getCamelCase } from '../../utils/products';
import { hiddenFields } from '../../utils/toggleClass';

const FilterManufacturer = (props) => {
    const dispatch = useDispatch();
    const visibleBlockRef = useRef();
    const countsManufacturerList = getCountsManufacturerList(props.manufacturerList, props.fullManufacturerList);

    useEffect(() => {
        if (!!props.manufacturerList.length) {
            const height = visibleBlockRef.current.getBoundingClientRect().height;
            visibleBlockRef.current.style.height = height + 'px';
        }
    }, [visibleBlockRef, props.manufacturerList]);

    return (
        <div className="filter-section">
            <h4
                onClick={(e) => hiddenFields(e, visibleBlockRef)}
                className='filter-title up'
            >
                Производитель
                <span className='arrow'></span>
            </h4>
            <div
                className={
                    !!props.manufacturerList.length
                        ?
                        'filter-modification-fields'
                        :
                        'filter-modification-fields child-none'
                }
                ref={visibleBlockRef}>
                {countsManufacturerList.map(item =>
                    <div className={
                        item.count === 0
                            ?
                            'item-container count-none'
                            :
                            "item-container"

                    } key={item.title}>
                        <label className='item'>
                            <span className='title-box'>
                                <input
                                    data-manufacturer={item.title.toLowerCase()}
                                    onClick={(e) => dispatch(changeManufacturerFilterCreator(getChangeFilter(e, props.filterManufacturer)))}
                                    disabled={
                                        !props.manufacturerList.length || item.count === 0
                                            ?
                                            true
                                            :
                                            false
                                    }
                                    className='checkbox'
                                    type="checkbox"
                                />
                                <span className='title'>{getCamelCase(item.title)}</span>
                            </span>
                            <span className='products-count'>
                                {item.count}
                            </span>
                        </label>

                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterManufacturer;
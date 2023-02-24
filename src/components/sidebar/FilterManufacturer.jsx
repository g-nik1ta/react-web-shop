import React, { useEffect, useRef } from 'react';
import { getChangeFilter, getCountsManufacturerList } from '../../utils/filter';
import { hiddenFields } from '../../utils/toggleClass';

const FilterManufacturer = (props) => {
    const visibleBlockRef = useRef();
    const countsManufacturerList = getCountsManufacturerList(props.manufacturerList);

    useEffect(() => {
        const height = visibleBlockRef.current.getBoundingClientRect().height;
        visibleBlockRef.current.style.height = height + 'px'
    }, [visibleBlockRef]);

    return (
        <div className="filter-section">
            <h4
                onClick={(e) => hiddenFields(e, visibleBlockRef)}
                className='filter-title up'
            >
                Производитель
                <span className='arrow'></span>
            </h4>
            <div className="filter-modification-fields" ref={visibleBlockRef}>
                {countsManufacturerList.map(item =>
                    <div className="item-container" key={item.title}>
                        <label className='item'>
                            <span className='title-box'>
                                <input
                                    data-manufacturer={item.title.toLowerCase()}
                                    onClick={(e) => props.setFilterManufacturer(getChangeFilter(e, props.filterManufacturer))}
                                    className='checkbox'
                                    type="checkbox"
                                />
                                <span className='title'>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</span>
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
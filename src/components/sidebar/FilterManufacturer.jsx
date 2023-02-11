import React, { useEffect, useRef, useState } from 'react';

const FilterManufacturer = (props) => {
    const [itemList, setItemList] = useState([
        { manufacturer: "apple", title: 'Apple', count: '15' },
        { manufacturer: "samsung", title: 'Samsung', count: '18' },
        { manufacturer: "xiaomi", title: 'Xiaomi', count: '7' },
    ])
    const [selectedValues, setSelectedValues] = useState([]);

    const getSort = (e) => {
        const manufacturerName = e.target.labels[0].dataset.manufacturer;
        if (selectedValues.includes(manufacturerName)) {
            setSelectedValues(selectedValues.filter(value => value !== manufacturerName))
        } else {
            setSelectedValues([...selectedValues, manufacturerName])
        }
    }

    useEffect(() => {
        console.log("Выбранные производители: ", selectedValues);
    }, [selectedValues]);

    useEffect(() => {
        const height = props.visibleBlockRef.current.getBoundingClientRect().height;
        props.visibleBlockRef.current.style.height = height + 'px'
    }, [props.visibleBlockRef]);

    return (
        <div className="filter-section">
            <h4
                onClick={props.hiddenFields}
                className='filter-title up'
            >
                Производитель
                <span className='arrow'></span>
            </h4>
            <div className="filter-modification-fields" ref={props.visibleBlockRef}>
                {itemList.map(item =>
                    <div className="item-container" key={item.title}>
                        <label className='item' data-manufacturer={item.manufacturer}>
                            <span className='title-box'>
                                <input
                                    onClick={getSort}
                                    className='checkbox'
                                    type="checkbox"
                                />
                                <span className='title'>{item.title}</span>
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
import React, { useEffect, useRef, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import { hiddenFields } from '../../utils/toggleClass';

const FilterPrice = (props) => {
    const visibleBlockRef = useRef();
    const [minValue, setMinValue] = useState(props.filterPrice.minValue);
    const [maxValue, setMaxValue] = useState(props.filterPrice.maxValue);

    useEffect(() => {
        setMinValue(props.filterPrice.minValue);
        setMaxValue(props.filterPrice.maxValue);
    }, [props.filterPrice]);

    useEffect(() => {
        const height = visibleBlockRef.current.getBoundingClientRect().height;
        visibleBlockRef.current.style.height = height + 'px'
    }, [visibleBlockRef]);

    const changeMinValue = (e) => {
        if (e.target.value >= maxValue) {
            setMinValue(maxValue - 5)
        } else setMinValue(e.target.value)
    }
    
    const changeMaxValue = (e) => {
        if (e.target.value <= minValue) {
            setMaxValue(minValue + 5)
        } else setMaxValue(e.target.value)
    }

    return (
        <div className="filter-section">
            <h4
                onClick={(e) => hiddenFields(e, visibleBlockRef)}
                className='filter-title up'
            >
                Цена
                <span className='arrow'></span>
            </h4>
            <div className="filter-modification-fields" ref={visibleBlockRef}>
                <input
                    onChange={e => changeMinValue(e)}
                    type="number"
                    className='entry-field'
                    value={minValue}
                />
                <span>-</span>
                <input
                    onChange={e => changeMaxValue(e)}
                    type="number"
                    className='entry-field'
                    value={maxValue}
                />
                <input
                    onClick={() => props.setFilterPrice({ minValue, maxValue })}
                    type="submit"
                    className='submit'
                    value="OK"
                />
                <MultiRangeSlider
                    min={props.priceBorder.minPrice}
                    max={props.priceBorder.maxPrice}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                    }}
                    label={false}
                    ruler={false}
                    style={{ border: "none", boxShadow: "none", padding: "20px 12px 15px" }}
                    barLeftColor="#ebebeb"
                    barInnerColor="#333"
                    barRightColor="#ebebeb"
                    thumbLeftColor="#ccc"
                    thumbRightColor="#ccc"
                />
            </div>
        </div>
    )
}

export default FilterPrice;
import React, { useEffect,  useRef, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import { hiddenFields } from '../../utils/toggleClass';

const FilterPrice = (props) => {
    const visibleBlockRef = useRef();
    const [minValue, setMinValue] = useState(props.filterPrice.minValue);
    const [maxValue, setMaxValue] = useState(props.filterPrice.maxValue);

    const changeFilterPrice = () => {
        props.setFilterPrice({ minValue, maxValue });
        props.setSelectedPriceFilter(true);
    }

    useEffect(() => {
        const height = visibleBlockRef.current.getBoundingClientRect().height;
        visibleBlockRef.current.style.height = height + 'px'
    }, [visibleBlockRef]);

    const changeValue = (e, value, setFn, number, condition) => {
        if (condition) {
            setFn(value + number)
        } else setFn(e.target.value)
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
                    onChange={e => changeValue(e, maxValue, setMinValue, -5, e.target.value >= maxValue)}
                    type="number"
                    className='entry-field'
                    value={minValue}
                />
                <span>-</span>
                <input
                    onChange={e => changeValue(e, minValue, setMaxValue, 5, e.target.value <= minValue)}
                    type="number"
                    className='entry-field'
                    value={maxValue}
                />
                <input
                    onClick={changeFilterPrice}
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
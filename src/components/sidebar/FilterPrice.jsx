import React, { useEffect, useRef, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import { hiddenFields } from '../../utils/toggleClass';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterPriceCreator } from '../../store/sortFilterReducer';

const FilterPrice = () => {
    const filterPrice = useSelector(state => state.sortFilterReducer.filterPrice);
    const priceBorder = useSelector(state => state.sortFilterReducer.priceBorder);
    const dispatch = useDispatch();
    const visibleBlockRef = useRef();
    const [minValue, setMinValue] = useState(priceBorder.minPrice);
    const [maxValue, setMaxValue] = useState(priceBorder.maxPrice);

    useEffect(() => {
        setMinValue(filterPrice.minValue);
        setMaxValue(filterPrice.maxValue);
    }, [filterPrice]);

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
                    onClick={() => dispatch(changeFilterPriceCreator({ minValue, maxValue }))}
                    type="submit"
                    className='submit'
                    value="OK"
                />
                <MultiRangeSlider
                    min={priceBorder.minPrice}
                    max={priceBorder.maxPrice}
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
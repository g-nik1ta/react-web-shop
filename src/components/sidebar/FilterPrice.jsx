import React, { useEffect, useRef, useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

const FilterPrice = (props) => {
    const [minValue, setMinValue] = useState(1092);
    const [maxValue, setMaxValue] = useState(40572);

    const getSort = () => {
        console.log('Min value:', minValue);
        console.log('Max value:', maxValue);
    }

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
                Цена
                <span className='arrow'></span>
            </h4>
            <div className="filter-modification-fields" ref={props.visibleBlockRef}>
                <input
                    onChange={e => setMinValue(e.target.value)}
                    type="number"
                    className='entry-field'
                    value={minValue}
                />
                <span>-</span>
                <input
                    onChange={e => setMaxValue(e.target.value)}
                    type="number"
                    className='entry-field'
                    value={maxValue}
                />
                <input
                    onClick={getSort}
                    type="submit"
                    className='submit'
                    value="OK"
                />
                <MultiRangeSlider
                    min={1092}
                    max={40572}
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
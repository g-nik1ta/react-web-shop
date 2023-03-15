import React, { useEffect, useRef } from 'react';
import { hiddenFields } from '../../utils/toggleClass';

const AddInfoBlock = (props) => {
    const visibleBlockRef = useRef();

    useEffect(() => {
        const height = visibleBlockRef.current.getBoundingClientRect().height;
        visibleBlockRef.current.style.height = height + 'px'
    }, [visibleBlockRef]);

    return (
        <div className='add-info-container'>
            <h4
                onClick={(e) => hiddenFields(e, visibleBlockRef)}
                className='add-info-header up'
            > {props.addInfo.header} </h4>
            <div
                className='add-info-content'
                ref={visibleBlockRef}
            >
                {
                    props.addInfo.body.title && <p className='title'>
                        {props.addInfo.body.title}
                    </p>
                }
                <ul>
                    {
                        props.addInfo.body.items.map((item, i) =>
                            <li
                                className="add-info-item"
                                key={i}
                            >
                                {item}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default AddInfoBlock;
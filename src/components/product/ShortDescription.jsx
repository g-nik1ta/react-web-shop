import React, { useEffect, useRef } from 'react';
import { hiddenFields } from '../../utils/toggleClass';

const ShortDescription = (props) => {
    const visibleBlockRef = useRef();
    
    useEffect(() => {
        setTimeout(() => {
            const height = visibleBlockRef.current.getBoundingClientRect().height;
            visibleBlockRef.current.style.height = height + 'px'
        }, 1)
    }, [visibleBlockRef]);

    return (
        <div className='short-description-container'>
            <h4
                onClick={(e) => hiddenFields(e, visibleBlockRef)}
                className='short-description-header up'
            >Описание</h4>
            <div
                className='short-description-content'
                ref={visibleBlockRef}
            >
                {
                    props.description.map((item, i) =>
                        <p
                            className="short-description-item"
                            key={i}
                            dangerouslySetInnerHTML={{ __html: item }}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ShortDescription;
import React from 'react';
import cls from './Loader.module.css';

const Loader = ({style, ...props}) => {
    return (
        <div className={cls.spinner__wrapper} style={{...style}}>
            <div className={cls.ldsSpinner} style={{transform: `scale(${props.scale})`}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
import React from 'react';
import cls from './Loader.module.css';

const Loader = (props) => {
    return (
        <div className={cls.spinner__wrapper}>
            <div className={cls.ldsSpinner} style={{transform: `scale(${props.scale})`}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
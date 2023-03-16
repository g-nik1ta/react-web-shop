import React from 'react';
import { Link } from 'react-router-dom';
import cls from './MySelectV2.module.css';

const MySelectV2 = ({ options }) => {
    return (
        <div className={cls.select}>
            <Link
                className={cls.selectTitle}
                to={'/buyers'}
            >Покупателям</Link>
            <div className={cls.dropdownMenu}>
                {options.map(option =>
                    <Link
                        className={cls.item}
                        key={option.value}
                        to={'/buyers/' + option.value}
                    >
                        {option.name}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default MySelectV2;
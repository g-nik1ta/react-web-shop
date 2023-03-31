import React from 'react';
import cls from './MySelect.module.css';

const MySelect = ({ options, value, onChange, ruValue = false }) => {
    return (
        <div 
            className={cls.select}
            onClick={e => e.currentTarget.classList.toggle(cls.visibleMenu)}
        >
            <span className={cls.selectedSort}>{value}</span>
            <div className={cls.dropdownMenu}>
                {options.map(option =>
                    <span 
                        key={option.value}
                        onClick={() => ruValue ? onChange(option.name) : onChange(option.value)}
                    >
                        {option.name}
                    </span>    
                )}
            </div>
        </div>
    )
}

export default MySelect;
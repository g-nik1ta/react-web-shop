import React from 'react';
import cls from './Pagination.module.css';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({page, changePage, totalPages}) => {
	let pagesArray = getPagesArray(totalPages);

    return (
        <div className={cls.pagination}>
            {pagesArray.map(item =>
                <span
                    key={item}
                    onClick={() => changePage(item)}
                    className={page === item ? (cls.item + ' ' + cls.itemCurrent) : cls.item}
                >
                    {item}
                </span>
            )}
        </div>
    )
}

export default Pagination;
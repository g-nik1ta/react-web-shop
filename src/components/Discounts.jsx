import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const Discounts = () => {
    return (
        <section className='discounts'>
            <div className="discounts__bcg">
                <div className="discounts-info">
                    <h1 className="title">
                        Скидка на аксессуары
                    </h1>
                    <Link to="/shop/category/accessories" >
                        <MyButton>
                            Посмотреть
                        </MyButton>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Discounts;
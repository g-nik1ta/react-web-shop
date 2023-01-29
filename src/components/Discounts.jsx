import React from 'react';
import MyButton from './UI/button/MyButton';

const Discounts = () => {
    return (
        <section className='discounts'>
            <div className="discounts__bcg">
                <div className="discounts-info">
                    <h1 className="title">
                        Скидка на аксессуары
                    </h1>
                    <MyButton>
                        Посмотреть
                    </MyButton>
                </div>
            </div>
        </section>
    )
}

export default Discounts;
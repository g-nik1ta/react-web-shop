import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 700,
    }

    return (
        <section className='category'>
            <h1 className='title'>Категории магазина</h1>
            <Slider {...settings}>
                <div className='card'>
                    <h2 className='card-title'>Новинки</h2>
                    <img
                        alt='novelties'
                        className='card-img'
                        src={require('../assets/category_slider/category-img/slider-04.jpg')}
                    />
                </div>
                <div className='card'>
                    <h2 className='card-title'>iPhone</h2>
                    <img
                        alt='iPhone'
                        className='card-img'
                        src={require('../assets/category_slider/category-img/slider-01.jpg')}
                    />
                </div>
                <div className='card'>
                    <h2 className='card-title'>iWatch</h2>
                    <img
                        alt='iWatch'
                        className='card-img'
                        src={require('../assets/category_slider/category-img/slider-02.jpg')}
                    />
                </div>
                <div className='card'>
                    <h2 className='card-title'>Аксессуары</h2>
                    <img
                        alt='Accessories'
                        className='card-img'
                        src={require('../assets/category_slider/category-img/slider-03.jpg')}
                    />
                </div>
            </Slider>
        </section>
    )
}

export default Category;
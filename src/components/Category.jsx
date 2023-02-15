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
    const categoryItems = [
        {
            title: 'Новинки',
            imgAlt: 'novelties',
            imgUrl: 'slider-01',
        },
        {
            title: 'iPhone',
            imgAlt: 'iPhone',
            imgUrl: 'slider-02',
        },
        {
            title: 'iWatch',
            imgAlt: 'iWatch',
            imgUrl: 'slider-03',
        },
        {
            title: 'Аксессуары',
            imgAlt: 'Accessories',
            imgUrl: 'slider-04',
        },
    ]

    return (
        <section className='category row'>
            <h1 className='title'>Категории магазина</h1>
            <Slider {...settings}>
                {categoryItems.map(item =>
                    <div className='card' key={item.imgUrl}>
                        <h2 className='card-title'>{item.title}</h2>
                        <img
                            alt={item.imgAlt}
                            className='card-img'
                            src={require(`../assets/category_slider/category-img/${item.imgUrl}.jpg`)}
                        />
                    </div>
                )}
            </Slider>
        </section>
    )
}

export default Category;
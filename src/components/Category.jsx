import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Category = () => {
    const category = useSelector(state => state.categoryReducer.category);
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 700,
    });

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 960 && window.innerWidth > 800) {
                setSettings({
                    ...settings,
                    slidesToShow: 2,
                    slidesToScroll: 2
                })
            } else if (window.innerWidth <= 800) {
                setSettings({
                    ...settings,
                    slidesToShow: 1,
                    slidesToScroll: 1
                })
            } else setSettings({
                ...settings,
                slidesToShow: 3,
                slidesToScroll: 3
            })
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <section className='category row'>
            <h1 className='title'>Категории магазина</h1>
            <Slider {...settings}>
                {category.map(item =>
                    <Link
                        className='category-card'
                        key={item.id}
                        to={`/shop/category/` + item.urlParam}
                    >
                        <h2 className='card-title'>{item.title}</h2>
                        <img
                            alt={item.urlParam}
                            className='card-img'
                            src={item.imgUrl}
                        />
                    </Link>
                )}
            </Slider>
        </section>
    )
}

export default Category;
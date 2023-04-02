import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyButton from './UI/button/MyButton';
import { Link } from 'react-router-dom';

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        cssEase: 'linear',
        pauseOnHover: true
    }
    const sliderItems = [
        {
            imgUrl: 'slider-01',
            headTitle: 'iPhone 11 pro',
            title: 'Революционная система трёх камер — гораздо больше возможностей и неизменная простота в использовании.',
        },
        {
            imgUrl: 'slider-02',
            headTitle: 'iPhone 11 pro',
            title: 'Революционная система трёх камер — гораздо больше возможностей и неизменная простота в использовании.',
        },
    ]

    return (
        <Slider {...settings} className="simple-slider">
            {sliderItems.map(item =>
                <div key={item.imgUrl}>
                    <section
                        style={{ backgroundImage: 'url(slider/' + item.imgUrl + '.jpg)' }}
                        className='slider-item'
                    >
                        <div className='slider-item__bcg'>
                            <div className="slider-info row">
                                <h1 className='head-title'>
                                    {item.headTitle}
                                </h1>
                                <p className='title'>
                                    {item.title}
                                </p>
                                <Link to="/shop">
                                    <MyButton>
                                        В каталог
                                    </MyButton>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

            )}
        </Slider>
    )
}

export default SimpleSlider;
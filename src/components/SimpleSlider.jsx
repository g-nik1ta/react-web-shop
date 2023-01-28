import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyButton from './UI/button/MyButton';

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

    return (
        <Slider {...settings}>
            <section id='slide-1' className='slider-item'>
                <div className='slider-item__bcg'>
                    <div className="slider-info">
                        <h1 className='head-title'>
                            iPhone 11 pro
                        </h1>
                        <p className='title'>
                            Революционная система трёх камер — гораздо больше возможностей и неизменная простота в использовании.
                        </p>
                        <MyButton>
                            В каталог
                        </MyButton>
                    </div>
                </div>
            </section>
            <section id='slide-2' className='slider-item'>
                <div className='slider-item__bcg'>
                    <div className="slider-info">
                        <h1 className='head-title'>
                            iPhone 11 pro
                        </h1>
                        <p className='title'>
                            Революционная система трёх камер — гораздо больше возможностей и неизменная простота в использовании.
                        </p>
                        <MyButton>
                            В каталог
                        </MyButton>
                    </div>
                </div>
            </section>
        </Slider>
    )
}

export default SimpleSlider;
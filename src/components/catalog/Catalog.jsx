import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatalogCard from './CatalogCard';
import { useSelector } from 'react-redux';

const Catalog = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 12000,
        pauseOnHover: true
    }
    const catalog = useSelector(state => state.catalogReducer.catalog);
    
    return (
        <section className='catalog'>
            <h1 className='title'>Каталог товаров</h1>
            <Slider {...settings}>
                {
                    catalog.map(product => 
                        <CatalogCard key={product.id} product={product} />
                    )
                }
            </Slider>
        </section>
    )
}

export default Catalog;
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatalogCard from './CatalogCard';
import { useSelector } from 'react-redux';
import { useSortedProducts } from '../../hooks/useProducts';

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
    const sortedCatalog = useSortedProducts(catalog, 'popular').slice(0, 6);
    
    return (
        <section className='catalog row'>
            <h1 className='title'>Каталог товаров</h1>
            <Slider {...settings}>
                {
                    sortedCatalog.map(product => 
                        <CatalogCard key={product.id} product={product} />
                    )
                }
            </Slider>
        </section>
    )
}

export default Catalog;
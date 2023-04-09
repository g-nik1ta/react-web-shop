import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatalogCard from './CatalogCard';
import { useSelector } from 'react-redux';
import { useSortedProducts } from '../../hooks/useProducts';

const Catalog = () => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 12000,
        pauseOnHover: true
    });
    const catalog = useSelector(state => state.catalogReducer.catalog);
    const sortedCatalog = useSortedProducts(catalog, 'popular').slice(0, 6);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 960 && window.innerWidth > 800) {
                setSettings({
                    ...settings,
                    slidesToShow: 3,
                    slidesToScroll: 3
                })
            } else if (window.innerWidth <= 800 && window.innerWidth > 500) {
                setSettings({
                    ...settings,
                    slidesToShow: 2,
                    slidesToScroll: 2
                })
            } else if (window.innerWidth <= 500) {
                setSettings({
                    ...settings,
                    slidesToShow: 1,
                    slidesToScroll: 1
                })
            } else setSettings({
                ...settings,
                slidesToShow: 4,
                slidesToScroll: 4
            })
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
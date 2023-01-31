import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyButton from '../UI/button/MyButton';

const Catalog = () => {
    const [productsUrl, setProductsUrl] = useState({
        iPhone11: 'iPhone 11/normal/iphone11__red__01',
        iPhone11Pro: 'iPhone 11 Pro Max/normal/iphone-11pro__gold__01',
        iWatchS6Nike: 'Apple Watch Series 6 Nike/normal/iwatch-s6-nike__black',
        iWatchS6: 'Apple Watch Series 6/normal/iwatch-s6__red',
        airPodsPro: 'AirPods Pro/normal/AirPods-Pro__white',
    });

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

    function toggleMdfProduct(e, mdf = '') {
        const parentEl = e.target.closest('.modifications-choose-line');
        const mdfProductName = parentEl.dataset.productName;;

        parentEl.childNodes.forEach(element => {
            element.classList.remove('product-mdf-item-current');
        });

        if (e.target.classList.contains('product-mdf-img')) {
            e.target.parentElement.classList.toggle('product-mdf-item-current');
        } else
        e.target.classList.toggle("product-mdf-item-current");
        
        switch (mdfProductName) {
            case 'iPhone11':
                setProductsUrl({ ...productsUrl, iPhone11: `iPhone 11/normal/iphone11__${mdf}__01` })
                break;
            case 'iPhone11Pro':
                setProductsUrl({ ...productsUrl, iPhone11Pro: `iPhone 11 Pro Max/normal/iphone-11pro__${mdf}__01` })
                break;
            case 'iWatchS6Nike':
                setProductsUrl({ ...productsUrl, iWatchS6Nike: `Apple Watch Series 6 Nike/normal/iwatch-s6-nike__${mdf}` })
                break;
            case 'iWatchS6':
                setProductsUrl({ ...productsUrl, iWatchS6: `Apple Watch Series 6/normal/iwatch-s6__${mdf}` })
                break;
            case 'airPodsPro':
                setProductsUrl({ ...productsUrl, airPodsPro: `AirPods Pro/normal/AirPods-Pro__${mdf}` })
                break;

            default:
                console.log('default case!');
                break;

        }
    }

    return (
        <section className='catalog'>
            <h1 className='title'>Каталог товаров</h1>
            <Slider {...settings}>
                <div className="card">
                    <div className="visible-block">
                        <img
                            src={require(`../../assets/catalog/${productsUrl.iPhone11}.jpg`)}
                            alt="img"
                            className='card-img'
                        />
                        <h3 className='card-title'>
                            iPhone 11
                        </h3>
                        <p className='card-price'>
                            19 572₴
                        </p>
                    </div>
                    <div className="hidden-block">
                        <div className="product-modifications">
                            <div className="modifications-choose-line" data-product-name="iPhone11">
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'black')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11/mini/iphone11__black.jpg')}
                                        alt="black"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                    onClick={(e) => toggleMdfProduct(e, 'red')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11/mini/iphone11__red.jpg')}
                                        alt="red"
                                        className='product-mdf-img '
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'white')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11/mini/iphone11__white.jpg')}
                                        alt="white"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'purple')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11/mini/iphone11__purple.jpg')}
                                        alt="purple"
                                        className='product-mdf-img'
                                    />
                                </div>
                            </div>
                            <div className="modifications-choose-line">
                                <div
                                    className="product-mdf-txt product-mdf-item product-mdf-item-current"
                                    onClick={toggleMdfProduct}
                                >64 gb</div>
                                <div
                                    className="product-mdf-txt product-mdf-item"
                                    onClick={toggleMdfProduct}
                                >256 gb</div>
                                <div
                                    className="product-mdf-txt product-mdf-item"
                                    onClick={toggleMdfProduct}
                                >512 gb</div>
                            </div>
                        </div>
                        <div className="product-buy-block">
                            <MyButton>Купить</MyButton>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="visible-block">
                        <img
                            src={require(`../../assets/catalog/${productsUrl.iPhone11Pro}.jpg`)}
                            alt="iPhone 11 Pro Max"
                            className='card-img'
                        />
                        <h3 className='card-title'>
                            iPhone 11 Pro Max
                        </h3>
                        <p className='card-price'>
                            30 772₴
                        </p>
                    </div>
                    <div className="hidden-block">
                        <div className="product-modifications">
                            <div className="modifications-choose-line" data-product-name="iPhone11Pro">
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'black')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11 Pro Max/mini/iphone-11pro__black.jpg')}
                                        alt="black"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'silver')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11 Pro Max/mini/iphone-11pro__silver.jpg')}
                                        alt="silver"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                    onClick={(e) => toggleMdfProduct(e, 'gold')}
                                >
                                    <img
                                        src={require('../../assets/catalog/iPhone 11 Pro Max/mini/iphone-11pro__gold.jpg')}
                                        alt="gold"
                                        className='product-mdf-img'
                                    />
                                </div>
                            </div>
                            <div className="modifications-choose-line">
                                <div
                                    className="product-mdf-txt product-mdf-item product-mdf-item-current"
                                    onClick={toggleMdfProduct}
                                >64 gb</div>
                                <div
                                    className="product-mdf-txt product-mdf-item"
                                    onClick={toggleMdfProduct}
                                >256 gb</div>
                                <div
                                    className="product-mdf-txt product-mdf-item"
                                    onClick={toggleMdfProduct}
                                >512 gb</div>
                            </div>
                        </div>
                        <div className="product-buy-block">
                            <MyButton>Купить</MyButton>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="visible-block">
                        <img
                            src={require(`../../assets/catalog/${productsUrl.iWatchS6Nike}__01.jpg`)}
                            alt="Apple Watch Series 6 Nike"
                            className='card-img main-img'
                        />
                        <img
                            src={require(`../../assets/catalog/${productsUrl.iWatchS6Nike}__02.jpg`)}
                            alt="Apple Watch Series 6 Nike"
                            className='card-img additional-img'
                        />
                        <h3 className='card-title'>
                            Apple Watch Series 6 Nike
                        </h3>
                        <p className='card-price'>
                            11 172₴
                        </p>
                    </div>
                    <div className="hidden-block">
                        <div className="product-modifications">
                            <div className="modifications-choose-line" data-product-name="iWatchS6Nike">
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                    onClick={(e) => toggleMdfProduct(e, 'black')}
                                >
                                    <img
                                        src={require('../../assets/catalog/Apple Watch Series 6 Nike/mini/iwatch-s6-nike__black.jpg')}
                                        alt="black"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'white')}
                                >
                                    <img
                                        src={require('../../assets/catalog/Apple Watch Series 6 Nike/mini/iwatch-s6-nike__white.jpg')}
                                        alt="white"
                                        className='product-mdf-img'
                                    />
                                </div>
                            </div>
                            <div className="modifications-choose-line ">
                                <div
                                    className="product-mdf-txt product-mdf-item product-mdf-item-current"
                                    onClick={toggleMdfProduct}
                                >40</div>
                                <div
                                    className="product-mdf-txt product-mdf-item"
                                    onClick={toggleMdfProduct}
                                >44</div>
                            </div>
                        </div>
                        <div className="product-buy-block">
                            <MyButton>Купить</MyButton>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="visible-block">
                        <img
                            src={require(`../../assets/catalog/${productsUrl.iWatchS6}__01.jpg`)}
                            alt="Apple Watch Series 6"
                            className='card-img'
                        />
                        <img
                            src={require(`../../assets/catalog/${productsUrl.iWatchS6}__02.jpg`)}
                            alt="Apple Watch Series 6"
                            className='card-img additional-img'
                        />
                        <h3 className='card-title'>
                            Apple Watch Series 6
                        </h3>
                        <p className='card-price'>
                            11 172₴
                        </p>
                    </div>
                    <div className="hidden-block">
                        <div className="product-modifications">
                            <div className="modifications-choose-line" data-product-name="iWatchS6">
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                    onClick={(e) => toggleMdfProduct(e, 'black')}
                                >
                                    <img
                                        src={require('../../assets/catalog/Apple Watch Series 6/mini/iwatch-s6__black.jpg')}
                                        alt="black"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'white')}
                                >
                                    <img
                                        src={require('../../assets/catalog/Apple Watch Series 6/mini/iwatch-s6__white.jpg')}
                                        alt="white"
                                        className='product-mdf-img'
                                    />
                                </div>
                                <div
                                    className='product-mdf-img__wrapper product-mdf-item'
                                    onClick={(e) => toggleMdfProduct(e, 'red')}
                                >
                                    <img
                                        src={require('../../assets/catalog/Apple Watch Series 6/mini/iwatch-s6__red.jpg')}
                                        alt="red"
                                        className='product-mdf-img'
                                    />
                                </div>
                            </div>
                            <div className="modifications-choose-line">
                                <div
                                    className="product-mdf-txt product-mdf-item product-mdf-item-current"
                                    onClick={toggleMdfProduct}
                                >40</div>
                                <div
                                    className="product-mdf-txt product-mdf-item"
                                    onClick={toggleMdfProduct}
                                >44</div>
                            </div>
                        </div>
                        <div className="product-buy-block">
                            <MyButton>Купить</MyButton>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="visible-block">
                        <img
                            src={require(`../../assets/catalog/${productsUrl.airPodsPro}__01.jpg`)}
                            alt="AirPods Pro"
                            className='card-img'
                        />
                        <img
                            src={require(`../../assets/catalog/${productsUrl.airPodsPro}__02.jpg`)}
                            alt="AirPods Pro"
                            className='card-img additional-img'
                        />
                        <h3 className='card-title'>
                            AirPods Pro
                        </h3>
                        <p className='card-price'>
                            6 972₴
                        </p>
                    </div>
                    <div className="hidden-block">
                        <div className="product-modifications" data-product-name="airPodsPro">
                            <div className="modifications-choose-line"></div>
                            <div className="modifications-choose-line"></div>
                        </div>
                        <div className="product-buy-block">
                            <MyButton>Купить</MyButton>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Catalog;
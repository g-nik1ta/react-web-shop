import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImages = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: false,
    }

    const settingsVertical = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        autoplay: false,
        vertical: true,
    }

    return (
        <div className="product-images">
            {props.productsGallery.length > 4
                ?
                <Slider {...settingsVertical} className="gallery-slider">
                    {
                        props.productsGallery.map((item, i) =>
                            item && <img src={item} alt="img" key={i} />
                        )
                    }
                </Slider>
                :
                <div className='gallery'>
                    {
                        props.productsGallery.map((item, i) =>
                            item && <img src={item} alt="img" key={i} />
                        )
                    }
                </div>
            }
            <Slider {...settings} className='image-slider'>
                {
                    props.productsGallery.map((item, i) =>
                        item && <img src={item} alt="img" key={i} />
                    )
                }
            </Slider>
        </div>
    )
}

export default ProductImages;
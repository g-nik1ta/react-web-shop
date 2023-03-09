import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from '../components/UI/loader/Loader';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { toggleClass } from '../utils/toggleClass';
import { changePriceCreator, changeUrlCreator, resetDefault } from '../store/catalogReducer';
import { resetCatalogCard } from '../utils/products';
import MyButton from '../components/UI/button/MyButton';

const Product = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: false,
    }
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.catalogReducer.catalog).find(element => params.name === element.productName)

    // console.log(product.promotionalPrice)
    // console.log(params.name)

    const [productsGallery, setProductsGallery] = useState([]);

    function toggleProductMdf_01(e, mdf, id) {
        toggleClass(e);
        dispatch(changeUrlCreator({ id, mdf }));

        if (product.productModifications_01.length) {
            const mdfCurrent = product.productModifications_01.find(item => item.mdf === mdf.mdf);
            mdfCurrent.gallery.length && setProductsGallery([mdfCurrent.url_1, mdfCurrent.url_2, ...mdfCurrent.gallery])
        }
    }

    function toggleProductMdf_02(e, price, id, promotionalPrice = null) {
        toggleClass(e);
        dispatch(changePriceCreator({ price, id, promotionalPrice }));
    }

    useEffect(() => {
        window.scrollTo({ top: 0 });
        product && dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop/' },
            { routeItem: product.title, path: `/shop/${product.productName}` },
        ]))

        if (product) {
            const [currentPrice, currentPromotionalPrice, resetUrl_1, resetUrl_2] = resetCatalogCard(product);

            dispatch(resetDefault({
                id: product.id,
                resetUrl_1,
                resetUrl_2,
                currentPrice,
                currentPromotionalPrice
            }));

            const mdfCurrent = product.productModifications_01.find(item => item.mdfCurrent);
            if (product.productModifications_01.length) {
                mdfCurrent.gallery.length && setProductsGallery([mdfCurrent.url_1, mdfCurrent.url_2, ...mdfCurrent.gallery])
            } else {
                setProductsGallery([mdfCurrent.url_1, mdfCurrent.url_2]);
            }
        }
    }, []);

    if (!product) {
        return <Loader scale={.85} style={{ height: '70vh' }} />
    }

    return (
        <>
            <RoutePanel />
            <div className='product_container'>
                <div className='product_content row'>
                    <div className='product-info'>
                        <div className="product-images">
                            <div className="gallery">
                                {
                                    productsGallery.map((item, i) =>
                                        item && <img src={item} alt="img" key={i} />
                                    )
                                }
                            </div>
                            <Slider {...settings} className='image-slider'>
                                {
                                    productsGallery.map((item, i) =>
                                        item && <img src={item} alt="img" key={i} />
                                    )
                                }
                            </Slider>
                        </div>
                        <div className="product-details">
                            <h1 className='name'>{product.title}</h1>
                            <p className='vendor-code'>Артикул: <strong>{product.vendorCode}</strong></p>
                            <p className='manufacturer'>Производитель: <strong>
                                {product.manufacturer.charAt(0).toUpperCase() + product.manufacturer.slice(1)}
                            </strong>
                            </p>
                            <p className='price'>
                                {product.promotionalPrice && <span>
                                    {(Number(product.promotionalPrice)).toLocaleString('ru')} ₴
                                </span>
                                }
                                {(Number(product.price)).toLocaleString('ru')} ₴
                            </p>
                            <div className="product-modifications">
                                <div className="modifications-choose-block">
                                    <p className='sub'>
                                        Цвет
                                    </p>
                                    <div className="modifications-choose-line">
                                        {product.productModifications_01.map(productMdf =>
                                            <div
                                                key={productMdf.id}
                                                className={productMdf.mdfUrl
                                                    ? productMdf.mdfCurrent
                                                        ? 'product-mdf-img__wrapper product-mdf-item product-mdf-item-current'
                                                        : 'product-mdf-img__wrapper product-mdf-item'
                                                    : productMdf.mdfCurrent
                                                        ? 'product-mdf-color__block product-mdf-item product-mdf-item-current'
                                                        : 'product-mdf-color__block product-mdf-item'
                                                }
                                                style={!productMdf.mdfUrl ? { backgroundColor: productMdf.color } : {}}
                                                onClick={e => productMdf.url_1
                                                    ?
                                                    toggleProductMdf_01(e, productMdf, product.id)
                                                    :
                                                    toggleClass(e)
                                                }
                                            >
                                                {productMdf.mdfUrl && <img
                                                    src={productMdf.mdfUrl}
                                                    alt={productMdf.mdf}
                                                    className='product-mdf-img'
                                                />}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="modifications-choose-block">
                                    <p className='sub'>
                                        Встроеная память
                                    </p>
                                    <div className="modifications-choose-line">
                                        {product.productModifications_02.map(productMdf =>
                                            <div
                                                key={productMdf.id}
                                                className={productMdf.mdfCurrent
                                                    ? 'product-mdf-txt product-mdf-item product-mdf-item-current'
                                                    : 'product-mdf-txt product-mdf-item'
                                                }
                                                onClick={(e) => {
                                                    product.promotionalPrice
                                                        ?
                                                        toggleProductMdf_02(e, productMdf.mdfPrice, product.id, productMdf.promotionalMdfPrice)
                                                        :
                                                        toggleProductMdf_02(e, productMdf.mdfPrice, product.id)
                                                }}
                                            >
                                                {productMdf.mdf}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="product-buy-block">
                                <MyButton>Купить</MyButton>
                            </div>
                        </div>
                    </div>

                    <div className="description">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/UI/loader/Loader';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { changeArrCreator } from '../store/routePanelReducer';
import { resetDefault } from '../store/catalogReducer';
import { getCamelCase, resetCatalogCard } from '../utils/products';
import MyButton from '../components/UI/button/MyButton';
import ProductImages from '../components/product/ProductImages';
import ProductModifications from '../components/product/ProductModifications';
import Characteristics from '../components/product/Characteristics';
import ShortDescription from '../components/product/ShortDescription';
import AddInfoBlock from '../components/product/AddInfoBlock';

const Product = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.catalogReducer.catalog).find(element => params.name === element.productName)

    const [productsGallery, setProductsGallery] = useState([]);
    const [productCharacteristics, setProductCharacteristics] = useState({
        color: null,
        mdf: null
    });

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
            setProductsGallery([mdfCurrent.url_1, mdfCurrent.url_2, ...mdfCurrent.gallery])

            const currentMdf1 = product.productModifications_01.find(element => element.mdfCurrent);
            if (product.mdfSub) {
                const currentMdf2 = product.productModifications_02.find(element => element.mdfCurrent)
                setProductCharacteristics({
                    color: getCamelCase(currentMdf1.mdf), mdf: currentMdf2.mdf
                })
            } else setProductCharacteristics({
                ...productCharacteristics, color: getCamelCase(currentMdf1.mdf)
            })
        }
    }, [params]);

    if (!product) {
        return <Loader scale={.85} style={{ height: '70vh' }} />
    }

    return (
        <>
            <RoutePanel />
            <div className='product_container'>
                <div className='product_content row'>
                    <div className='product-info'>
                        <ProductImages productsGallery={productsGallery.filter(item => item)} />
                        <div className="product-details">
                            <h1 className='name'>{product.title}</h1>
                            <p className='vendor-code'>Артикул: <strong>{product.vendorCode}</strong></p>
                            <p className='manufacturer'>Производитель: <strong>
                                {getCamelCase(product.manufacturer)}
                            </strong>
                            </p>
                            <p className='price'>
                                {product.promotionalPrice && <span>
                                    {(Number(product.promotionalPrice)).toLocaleString('ru')} ₴
                                </span>
                                }
                                {(Number(product.price)).toLocaleString('ru')} ₴
                            </p>
                            <ProductModifications
                                product={product}
                                setProductsGallery={setProductsGallery}
                                productCharacteristics={productCharacteristics}
                                setProductCharacteristics={setProductCharacteristics}
                            />
                            <div className="product-buy-block">
                                <MyButton>Купить</MyButton>
                            </div>

                            <Characteristics
                                product={product}
                                productCharacteristics={productCharacteristics}
                            />

                            <div className="description">
                                {
                                    !!product.description.length &&
                                    <ShortDescription description={product.description} />
                                }
                                {
                                    product.addInfo.map(item =>
                                        <AddInfoBlock addInfo={item} key={item.header}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
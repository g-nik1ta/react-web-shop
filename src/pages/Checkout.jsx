import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketInfo from '../components/checkout/BasketInfo';
import CheckoutForm from '../components/checkout/CheckoutForm';
import RoutePanel from '../components/UI/routePanel/RoutePanel';
import { app } from '../firebase';
import { changeArrCreator } from '../store/routePanelReducer';
import { closeSidebar, openSidebar } from '../utils/toggleClass';

const Checkout = () => {
    const auth = getAuth(app);
    const newUserRef = useRef();
    const regularUserRef = useRef();
    const user = useSelector(state => state.authReducer.user);
    const basket = useSelector(state => state.basketReducer.basket);
    const dispatch = useDispatch();
    const [isPromocode, setIsPromocode] = useState({
        isUsed: false,
        discount: 0
    });

    const facebookLoginUser = async () => {
        const provider = new FacebookAuthProvider();
        await signInWithPopup(auth, provider);
    }
    const googleLoginUser = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }

    const newUser = () => {
        closeSidebar('login');
        newUserRef.current.classList.add('current');
        regularUserRef.current.classList.remove('current');

    }
    const regularUser = () => {
        openSidebar('login');
        regularUserRef.current.classList.add('current');
        newUserRef.current.classList.remove('current');
    }

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(changeArrCreator([
            { routeItem: 'Магазин', path: '/shop/' },
        ]))
    }, [])

    return (
        <>
            <RoutePanel />
            <div className="checkout_container">
                <div className="checkout_content row">
                    <h1 className='title'>Оформить заказ</h1>
                    {
                        !!basket.length
                            ?
                            <div className="checkout-block">
                                <div className="form-block">
                                    {
                                        user.id
                                            ?
                                            null
                                            :
                                            <div className="new-existing-block">
                                                <span
                                                    ref={newUserRef}
                                                    onClick={newUser}
                                                    className='current'
                                                >
                                                    Я новый покупатель
                                                </span>
                                                <span
                                                    ref={regularUserRef}
                                                    onClick={regularUser}
                                                >
                                                    Я постоянный клиент
                                                </span>
                                                <div className="socials-btn-login">
                                                    <div
                                                        onClick={facebookLoginUser}
                                                        className="facebook"></div>
                                                    <div
                                                        onClick={googleLoginUser}
                                                        className="google"></div>
                                                </div>
                                            </div>
                                    }
                                    <CheckoutForm
                                        basket={basket}
                                        isPromocode={isPromocode}
                                        user={user}
                                    />
                                </div>
                                <BasketInfo
                                    basket={basket}
                                    isPromocode={isPromocode}
                                    setIsPromocode={setIsPromocode}
                                />
                            </div>
                            :
                            <div className='no-orders'>
                                В вашей корзине нет товаров.
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Checkout;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { closeSidebar } from '../../utils/toggleClass';
import BasketItems from './BasketItems';
import ContinueShopping from './ContinueShopping';
import ExpressCheckout from './ExpressCheckout';

const SidebarBasket = () => {
    const basket = useSelector(state => state.basketReducer.basket);
    const [expressCheckout, setExpressCheckout] = useState(false);

    return (
        <div className='sidebar-window basket'>
            <span
                className='close-window'
                onClick={() => closeSidebar('basket')}
            >&#10006;</span>
            <div className="content__wrapper">
                {
                    !!basket.length
                        ?
                        expressCheckout
                            ?
                            <ExpressCheckout setExpressCheckout={setExpressCheckout} />
                            :
                            <BasketItems
                                basket={basket}
                                setExpressCheckout={setExpressCheckout}
                            />
                        :
                        <ContinueShopping />
                }
            </div>
        </div>
    )
}

export default SidebarBasket;
import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import About from "../pages/About";
import ShippingAndPayment from "../pages/ShippingAndPayment";
import Buyers from "../pages/Buyers";
import BlogPage from "../pages/BlogPage";
import Contacts from "../pages/Contacts";
import CategoryShop from "../pages/CategoryShop";
import Checkout from "../pages/Checkout";
import Basket from "../pages/Basket";
import OrderComplete from "../pages/OrderComplete";

export const routes = [
    {path: '*', element: <Navigate to={`${process.env.PUBLIC_URL}/home`} />, exact: false},
    {path: `${process.env.PUBLIC_URL}/home`, element: <Home/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/shop`, element: <Shop/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/shop/:name`, element: <Product/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/shop/category/:category`, element: <CategoryShop/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/shop/checkout`, element: <Checkout/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/shop/basket`, element: <Basket/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/shop/complete/:orderId`, element: <OrderComplete/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/buyers`, element: <Buyers/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/buyers/about`, element: <About/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/buyers/shipping-and-payment`, element: <ShippingAndPayment/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/blog`, element: <BlogPage/>, exact: true},
    {path: `${process.env.PUBLIC_URL}/contacts`, element: <Contacts/>, exact: false},
]
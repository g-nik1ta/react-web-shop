import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import About from "../pages/About";
import ShippingAndPayment from "../pages/ShippingAndPayment";
import Buyers from "../pages/Buyers";

export const routes = [
    {path: '*', element: <Navigate to="/home" />, exact: false},
    {path: '/home', element: <Home/>, exact: true},
    {path: '/shop', element: <Shop/>, exact: true},
    {path: '/shop/:name', element: <Product/>, exact: true},
    {path: '/home/buyers', element: <Buyers/>, exact: true},
    {path: '/home/buyers/about', element: <About/>, exact: true},
    {path: '/home/buyers/shipping-and-payment', element: <ShippingAndPayment/>, exact: true},
]
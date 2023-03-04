import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";

export const routes = [
    {path: '*', element: <Navigate to="/home" />, exact: false},
    {path: '/home', element: <Home/>, exact: false},
    {path: '/shop', element: <Shop/>, exact: true},
    {path: '/shop/:name', element: <Product/>, exact: true},
]
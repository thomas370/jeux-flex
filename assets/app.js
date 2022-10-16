import React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/app.css';
import Home from './js/components/Home';
import Panier from './js/components/Panier';

const router = createBrowserRouter([{
    path: '/',
    element : <Home />,
}, {
    path: 'panier',
    element : <Panier />,
}])




ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
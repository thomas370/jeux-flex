import React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/app.css';
import Home from './js/components/Home';
import Panier from './js/components/Panier';
import Fiches from './js/components/Fiches';

const router = createBrowserRouter([{
    path: '/',
    element : <Home />,
}, {
    path: 'panier',
    element : <Panier />,
}, {
    path: 'fiches/:id',
    element : <Fiches />,
}
]);




ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
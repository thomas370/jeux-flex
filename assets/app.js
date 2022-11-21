import React from 'react';
import {createRoot} from "react-dom/client";
import { createHashRouter, RouterProvider,} from "react-router-dom";
import './styles/app.css';
import Home from './js/components/Home';
import Panier from './js/components/Panier';
import Fiches from './js/components/Fiches';
import LoginUser from "./js/components/LoginUser";


const router = createHashRouter([{
    path: '/',
    element : <Home />,
}, {
    path: 'panier',
    element : <Panier />,
}, {
    path: 'fiches/:id',
    element : <Fiches />,
}, {
    path: 'loginUser',
    element : <LoginUser />,
}
]);




if (document.getElementById("root")) {
    const rootAppElement = document.getElementById("root");
    const rootApp = createRoot(rootAppElement);
    rootApp.render(
        <>
            <RouterProvider router={router} />
        </>
    )
    ;
}
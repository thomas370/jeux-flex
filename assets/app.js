import React from 'react';
import {createRoot} from "react-dom/client";
import { createHashRouter, RouterProvider,} from "react-router-dom";
import './styles/app.css';
import Home from './js/components/Home';
import Panier from './js/components/Panier';
import Fiches from './js/components/Fiches';
import LoginUser from "./js/components/LoginUser";
import Register from "./js/components/Register";
import BackOffice from "./js/components/Backoffice";
import WishList from "./js/components/WishList";


const router = createHashRouter([{
    path: '/',
    element : <Home />,
}, {
    path: 'Panier',
    element : <Panier />,
}, {
    path: 'Fiches/:id',
    element : <Fiches />,
}, {
    path: 'LoginUser',
    element : <LoginUser />,
},{
    path: 'Register',
    element : <Register />,
},{
    path: 'Backoffice',
    element : <BackOffice />,
},{
    path: 'WishList',
    element : <WishList />,
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
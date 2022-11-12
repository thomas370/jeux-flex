import React from 'react';
import Header from './Header';
import Nav from "./Nav";
import Footer from "./Footer";
import Card from "./Card";


const Home = () => {
    return (
        <div>
            <Nav />
            <Header />
            <div className={"Containerisation"}>
                <Card />
                <Card /> 
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import Header from './Header';
import Nav from "./Nav";
import Footer from "./Footer";
import Shearch from "./Shearch";
import Card from "./Card";


const Home = () => {
    return (
        <div>
            <Nav />
            <Header />
            <Shearch />
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
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="shadow">
                <header>

                </header>
            </div>
            <div className="filter">
                <div className='Shearch'>
                    <div className={'Shearch_container'}>
                    <input type="text" placeholder=" Search..."></input>
                    <button>Search</button>
                    </div>
                <div className="filter_container">
                        <select name="PC" id="PC-select">
                            <option value=""> Pc</option>
                            <option value="Steam">Steam</option>
                            <option value="Battle.net">Battle.net</option>
                            <option value="Ubisoft connect">Ubisoft connect</option>
                            <option value="Origine">Origine</option>
                            <option value="Rockstar">Rockstar</option>
                            <option value="Epic">Epic</option>
                        </select>
                        <select name="Playstation" id="Playstation-select">
                            <option value=""> Playstation</option>
                            <option value="Playstation-4">Playstation-4</option>
                            <option value="Playstation-5">Playstation-5</option>
                        </select>
                        <select name="Nintendo" id="Nintendo-select">
                            <option value=""> Nintendo</option>
                            <option value="Nintendo-switch">Nintendo-switch</option>
                        </select>
                        <select name="xbox" id="xbox-select">
                            <option value=""> xbox</option>
                            <option value="xbox-one">xbox one</option>
                            <option value="xbox-serie-s-x">xbox s|x</option>
                        </select>
                        <select>
                            <option value="">Genre</option>
                            <option value="Action">Action</option>
                            <option value="Aventure">Aventure</option>
                            <option value="FPS">FPS</option>
                            <option value="RPG">RPG</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Sport">Sport</option>
                            <option value="Stratégie">Stratégie</option>
                        </select>
                        <select>
                            <option value="">Prix</option>
                            <option value="0-10">0-10€</option>
                            <option value="10-30">10-30€</option>
                            <option value="20-50">20-50€</option>
                            <option value="30-70">30-70€</option>
                            <option value="50-100">50-100€</option>
                            <option value="100et+">100 et +</option>
                        </select>
                    </div>
                 </div>
            </div>
        </div>
    );
};
export default Header;


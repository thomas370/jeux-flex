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
                    <input type="text" placeholder=" Search..."></input>
                    <button>Search</button>
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
                </div>
            </div>
        </div>
    );
};
export default Header;


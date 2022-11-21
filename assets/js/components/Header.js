import React, {useEffect, useState} from 'react';
import '../../styles/Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Header = ({searchResult, games, setGames, setSearchResult}) => {
    const [search, setSearch] = useState({
        search: "",
        price: "",
        pc: "",
        genre: "",
    });


    function onChange({currentTarget}) {
        const {name, value} = currentTarget;
        setSearch({...search, [name]: value});

    }

    useEffect(() => {
        console.log(search)
        if (search.search.length >= 2) {
            const result = searchResult.filter(game => game.name.includes(search.search));
            setSearchResult(result)
        }
       if (search.price) {
            const rangeValue = search.price.split('-')
            const result = searchResult.filter(game => game.prix >= rangeValue[0] && game.prix <= rangeValue[1])
            setSearchResult(result)
        }

       if (search.pc) {
            const result = searchResult.filter(game => game.id_plat?.platform === search.pc)
            setSearchResult(result)
        }

       if (search.genre) {
           const result = searchResult.filter(game => game.id_type?.type === search.genre)
           setSearchResult(result)
       }

       if (search.search.length === 0 && search.price === "" && search.pc === "" && search.genre === "") {
            setSearchResult(games)
        }

    }, [search])

    useEffect(() => {
    }, [games])


    return (
        <div>
            <div className="shadow">
                <header>

                </header>
            </div>
            <div className="filter">
                <div className='Shearch'>
                    <div className={'Shearch_container'}>
                        <input onChange={(e) => onChange(e)} id='recherche' type="text"
                               placeholder=" Search..." name="search"></input>
                        <button>Search</button>
                        <button>Reset</button>

                    </div>
                    <div className="filter_container">
                        <select name="pc" id="PC-select" onChange={onChange}>
                            <option value="">Platform</option>
                            <option value="Steam">Steam</option>
                            <option value="Battle.net">Battle.net</option>
                            <option value="Ubisoft connect">Ubisoft connect</option>
                            <option value="Origine">Origine</option>
                            <option value="Rockstar">Rockstar</option>
                            <option value="Epic">Epic</option>
                        </select>
                        <select name="genre" onChange={onChange}>
                            <option value="">Genre</option>
                            <option value="Action">Action</option>
                            <option value="Aventure">Aventure</option>
                            <option value="FPS">FPS</option>
                            <option value="RPG">RPG</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Sport">Sport</option>
                            <option value="Stratégie">Stratégie</option>
                        </select>
                        <select name='price' onChange={onChange}>
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


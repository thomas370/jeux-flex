import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/AddGame.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddGame = () => {
    const [platforms, setPlatforms] = useState([]);
    const [types, setTypes] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [idPlat, setPlat] = useState('');
    const [idType, setCate] = useState('');
    const [prix, setPrice] = useState('');
    const [reduction, setReduc] = useState('');
    const [images, setImage] = useState('');
    const [imagesFond, setFond] = useState('');
    const [video, setVideo] = useState('');
    const [stock, setStock] = useState('');
    const [editeur, setEditeur] = useState('');

    const [platforme, setPlatform] = useState('');
    const [typees, setType] = useState('');

    //submit game
    const handleSubmitgame = async (e) => {
        e.preventDefault();
        const game = {
            name,
            description,
            date,
            idPlat: `api/platforms/${idPlat}`,
            idType: `api/types/${idType}`,
            prix,
            reduction,
            images,
            imagesFond,
            video,
            stock,
            editeur
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/api/jeuxes",
                game
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
            console.log(name, description, date, idPlat, idType, prix, reduction, images, imagesFond, video, stock, editeur)
        }
    }

    //recupération des plateformes et types
    const fetchPlatforms = async () => {
        const response = await fetch('http://localhost:8000/api/platforms');
        const data = await response.json();
        setPlatforms(data['hydra:member']);
        console.log(data['hydra:member'])
    }

    const fetchType = async () => {
        const response = await fetch('http://localhost:8000/api/types');
        const data = await response.json();
        setTypes(data['hydra:member']);
        console.log(data['hydra:member'])
    }

    useEffect(() => {
        fetchPlatforms().then(r => console.log(platforms));
        fetchType().then(r => console.log(types));
    }, []);

    //submit platform
    const handleSubmitplatform = async (e) => {
        e.preventDefault();
        const platform = {
            platform : platforme
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/api/platforms",
                platform
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
            console.log(platform)
        }
    }

    //déléte platform
    const handleDeletePlatform = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/platforms/${id}`
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    //submit type
    const handleSubmittype = async (e) => {
        e.preventDefault();
        const type = {
            type : typees
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/api/types",
                type
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
            console.log(type)
        }
    }

    //déléte type
    const handleDeleteType = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/types/${id}`
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <Link to="/Backoffice">
                <button className="back-button">
                    <p><FontAwesomeIcon icon={faArrowLeft} /> Retour </p>
                </button>
            </Link>
            <div className="addall">
            <div className="addgame">
                <h1>Ajouter un jeu</h1>
                <form onSubmit={handleSubmitgame}>
                     <div className="form-group">
                        <label htmlFor="name">Nom du jeu</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Nom du jeu" required onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" className="form-control" placeholder="Description du jeu" required onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prix">Prix</label>
                        <input type="number" step="0.01" name="prix" id="prix" className="form-control" placeholder="Prix du jeu" min="0" required onChange={e => setPrice(e.target.valueAsNumber)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reduction">réduction</label>
                        <input type="number" step="0.01" name="reduction" id="reduc" className="form-control" placeholder="Prix du jeu" min="0" required onChange={e => setReduc(e.target.valueAsNumber)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image jacket</label>
                        <input type="url" name="images" id="images" placeholder="https://example.com" pattern="https://.*" required onChange={e => setImage(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="images_fond">Image fond</label>
                        <input type="url" name="imagesFond" id="imagesFond" placeholder="https://example.com" pattern="https://.*" required onChange={e => setFond(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Video">Video</label>
                        <input type="url" name="video" id="Video" placeholder="https://example.com" pattern="https://.*" required onChange={e => setVideo(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" name="stock" id="stock" className="form-control" placeholder="Stock du jeu" min="0" required onChange={e => setStock(e.target.valueAsNumber)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Date de sortie</label>
                        <input type="date" name="date" id="releaseDate" className="form-control" placeholder="Date de sortie du jeu" required onChange={e => setDate(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_plat_id">Plateforme</label>
                        <select name="id_plat_id" id="id_plat_id" className="form-control" required onChange={e => setPlat(e.target.value)}>
                            <option value="">Choisissez une plateforme</option>
                            {platforms.map((platform) => (
                                <option key={platform.id} value={platform.id}>{platform.platform}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_type_id">Catégorie</label>
                        <select name="id_type_id" id="id_type_id" className="form-control" required onChange={e => setCate(e.target.value)}>
                            <option value={""} className={"form-control"}>Choisissez une catégorie</option>
                            {types.map((type) => (
                                <option key={type.id} value={type.id} className={"form-control"}>{type.type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="editor">Editeur</label>
                        <input type="text" name="editor" id="editor" className="form-control" placeholder="Editeur du jeu" required onChange={e => setEditeur (e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>
</div>
                <div className="addgame">
                    <h1>Ajouter une platforme</h1>
                    <form onSubmit={handleSubmitplatform}>
                        <div className="form-group">
                            <label htmlFor="platform">Nom de la platform</label>
                            <input type="text" name="platform" id="platform" className="form-control" placeholder="platform" required onChange={e => setPlatform(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>platform</th>
                                <th>supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {platforms.map((platform) => (
                                <tr key={platform.id}>
                                    <td>{platform.id}</td>
                                    <td>{platform.platform}</td>
                                    <td><button onClick={() => deletePlatform(platform.id)}>Supprimer</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="addgame">
                    <h1>Ajouter un type de jeux </h1>
                    <form onSubmit={handleSubmittype}>
                        <div className="form-group">
                            <label htmlFor="type">type</label>
                            <input type="text" name="type" id="type" className="form-control" placeholder="type de jeux (action)" required onChange={e => setType(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>type</th>
                                <th>supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {types.map((type) => (
                                <tr key={type.id}>
                                    <td>{type.id}</td>
                                    <td>{type.type}</td>
                                    <td><button onClick={() => handleDeleteType(type.id)}>supprimé</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default AddGame;


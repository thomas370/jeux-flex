import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/AddGame.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddGame = () => {
    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [releaseDate, setDate] = useState('');
    const [platform, setPlat] = useState('');
    const [genre, setCate] = useState('');
    const [price, setPrice] = useState('');
    const [reduction, setReduc] = useState('');
    const [image, setImage] = useState('');
    const [imageFond, setFond] = useState('');
    const [video, setVideo] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const game = {
            name,
            description,
            releaseDate,
            platform,
            genre,
            price,
            reduction,
            image,
            imageFond,
            video,
            stock,
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/api/jeuxes",
                game
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
        }
    }
    const fetchPlatforms = async () => {
        const response = await fetch('http://localhost:8000/api/platforms');
        const data = await response.json();
        setPlatforms(data['hydra:member']);
    }

    const fetchGenres = async () => {
        const response = await fetch('http://localhost:8000/api/types');
        const data = await response.json();
        setGenres(data['hydra:member']);
    }

    useEffect(() => {
        fetchPlatforms();
        fetchGenres();
    }, []);

    return (
        <div>
            <Link to="/Backoffice">
                <button className="back-button">
                    <p><FontAwesomeIcon icon={faArrowLeft} /> Retour </p>
                </button>
            </Link>
            <div className="addgame">
                <h1>Ajouter un jeu</h1>
                <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label htmlFor="name">Nom du jeu</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Nom du jeu" required onChange={e => setName (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" className="form-control" placeholder="Description du jeu" required onChange={e => setDescription (e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Prix</label>
                        <input type="number" name="price" id="price" className="form-control" placeholder="Prix du jeu" min="0" required onChange={e => setPrice (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="reduction">réduction</label>
                        <input type="number" step="0.01" name="reduction" id="price" className="form-control" placeholder="Prix du jeu" min="0" required onChange={e => setReduc (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image jacket</label>
                        <input type="url" name="images" id="url" placeholder="https://example.com" pattern="https://.*" required onChange={e => setImage (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image fond</label>
                        <input type="url" name="imagesFond" id="url" placeholder="https://example.com" pattern="https://.*" required onChange={e => setFond (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Video">Video</label>
                        <input type="url" name="Video" id="url" placeholder="https://example.com" pattern="https://.*" required onChange={e => setVideo (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" name="stock" id="stock" className="form-control" placeholder="Stock du jeu" min="0" required onChange={e => setStock (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Date de sortie</label>
                        <input type="date" name="date" id="releaseDate" className="form-control" placeholder="Date de sortie du jeu" required onChange={e => setDate (e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="platform">Plateforme</label>
                        <select name="platform" id="platform" className="form-control" required onChange={e => setPlat (e.target.value)}>
                            <option value={""} className={"form-control"}>Choisissez une plateforme</option>
                            {platforms.map((platform) => (
                                <option value={platform.id} className={"form-control"}>{platform.platform}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Catégorie</label>
                        <select name="category" id="category" className="form-control" required onChange={e => setCate (e.target.value)}>
                            <option value={""} className={"form-control"}>Choisissez une catégorie</option>
                            {genres.map((genre) => (
                                <option value={genre.id} className={"form-control"}>{genre.type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="editor">Editeur</label>
                        <input type="text" name="editor" id="editor" className="form-control" placeholder="Editeur du jeu" required onChange={e => SetEditeur (e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        </div>
    );
}

export default AddGame;


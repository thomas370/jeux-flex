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
    const [id_plat_id, setPlat] = useState('');
    const [id_type_id, setCate] = useState('');
    const [prix, setPrice] = useState('');
    const [reduction, setReduc] = useState('');
    const [images, setImage] = useState('');
    const [images_fond, setFond] = useState('');
    const [video, setVideo] = useState('');
    const [stock, setStock] = useState('');
    const [editeur, setEditeur] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const game = {
            name : name,
            description : description,
            date : date,
            id_plat_id : id_plat_id,
            id_type_id : id_type_id,
            prix : prix,
            reduction : reduction,
            images : images,
            images_fond : images_fond,
            video : video,
            stock : stock,
            editeur : editeur
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/api/jeuxes",
                game
            );
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
            console.log(name, description, date, id_plat_id, id_type_id, prix, reduction, images, images_fond, video, stock, editeur)
        }
    }
    const fetchPlatforms = async () => {
        const response = await fetch('http://localhost:8000/api/platforms');
        const data = await response.json();
        setPlatforms(data['hydra:member']);
    }

    const fetchType = async () => {
        const response = await fetch('http://localhost:8000/api/types');
        const data = await response.json();
        setTypes(data['hydra:member']);
    }

    useEffect(() => {
        fetchPlatforms().then(r => console.log(platforms));
        fetchType().then(r => console.log(types));
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
                        <input type="url" name="images_fond" id="images_fond" placeholder="https://example.com" pattern="https://.*" required onChange={e => setFond(e.target.value)}/>
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
                        <select name="id_plat_id" id="id_plat_id" className="form-control" required onChange={e => setPlat (e.target.value)}>
                            <option value={""} className={"form-control"}>Choisissez une plateforme</option>
                            {platforms.map((platform) => (
                                <option key={platform.id} value={platform.id} className={"form-control"}>{platform.platform}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_type_id">Catégorie</label>
                        <select name="id_type_id" id="id_type_id" className="form-control" required onChange={e => setCate (e.target.value)}>
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
        </div>
    );
}

export default AddGame;


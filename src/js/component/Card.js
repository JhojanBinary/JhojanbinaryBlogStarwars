import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Card = ({ uid, category, name, imageUrl, imageHeight }) => {
    const { store, actions } = useContext(Context);

    const handleAddFavorite = () => {
        actions.addFavorite(name);
    };

    return (
        <div className="card mb-3 mx-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt="..."
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    e.target.style.height = imageHeight;
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link className="btn btn-outline-primary" to={`/StarWarsDetails/${category}/${uid}`}>
                        Learn more!
                    </Link>
                    <button
                        className={`btn ${store.favoritos.find(favorito => favorito === name) ? 'btn-warning' : 'btn-outline-warning'} fs-5 p-2`}
                        onClick={handleAddFavorite}
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

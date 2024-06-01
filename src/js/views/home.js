import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
    <div className="home-container">
        <div className="d-flex justify-content-center container text-center mt-5 pt-5">
            <Link className="text-decoration-none me-5" to="/StarWarsPrincipal">
                <span className='card-name text-decoration-none mb-2'>VIDEO</span>
            </Link>
            <a className="text-decoration-none me-5" href="https://www.disneyplus.com/es-pe/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA" target="_blank" rel="noopener noreferrer">
                <span className='card-name'>FILMS</span>
            </a>
            <a className="text-decoration-none me-5" href="https://www.disneyplus.com/es-pe/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA" target="_blank" rel="noopener noreferrer">
                <span className='card-name'>SERIES</span>
            </a>
            <Link className="text-decoration-none me-5" to="/StarWarsPrincipal">
                <span className='nav-name fw-bold'>DATA BANK</span>
            </Link>
            <a className="text-decoration-none me-5" href="https://www.disneyplus.com/es-pe/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA" target="_blank" rel="noopener noreferrer">
                <span className='card-name'>STARWARS ++</span>
            </a>
        </div>

        <div className="border-bottom"></div>

        <div className="d-flex justify-content-center mt-3">
            <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Star Wars" className="img-fluid rounded shadow-lg" />
        </div>
    </div>
);

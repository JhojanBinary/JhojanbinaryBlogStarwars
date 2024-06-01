import React, {useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const { likes, favoritos } = store;

	const handleRemoveFavorite = item => {
		actions.removeFavorite(item);
	};



	return (
		<div>
			<nav className="navbar navbar-dark bg-black container fixed-top mb-3">
				<Link to="/">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{ width: "120px", height: "60px" }} />
				</Link>
				<div className="ml-auto">

					<div className="nav-item dropdown">
						<a
							className="nav-link text-white dropdown-toggle btn btn-secondary"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Likes <span className="badge bg-secondary">{likes}</span>
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{favoritos.map((item, index) => (
								<div key={index} className="d-flex justify-content-between align-items-center m-2">
									<li>{item}</li>
									<button onClick={() => handleRemoveFavorite(item)} > 🗑 </button>
								</div>
							))}
						</ul>
					</div>

				</div>
			</nav>
		</div>

	);
};

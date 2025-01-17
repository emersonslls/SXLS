/* ---- CSS ---- */
import styles from '../../Styles/Components/Header.module.css';

/* ---- ASSETS ---- */
import Logo from '../../Assets/Logos/Logo.svg';
/* --- ICONS ---- */
import Search from '../../Assets/Icons/Search.svg';
import Profile from '../../Assets/Icons/Profile.svg';
import Cart from '../../Assets/Icons/Carrinho.svg';

import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Header({ addToCartCount }) {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca
    const items = ["Camiseta", "Calça", "Jaqueta", "Vestido", "Blusa", "Shorts"]; // Lista de itens

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <header>
            <Link to="/">
                <img src={Logo} className={styles.Logo} />
            </Link>
            <nav>
                <ul>
                    <Link to="/vestuario">
                        <li>Vestuario</li>
                    </Link>
                    <Link to="#">
                        <li>Lookbook</li>
                    </Link>
                    <Link to="#">
                        <li>Institucional</li>
                    </Link>
                </ul>
            </nav>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={Search}
                    alt="Buscar"
                    className={styles.searchIcon}
                />
            </div>
            <div className={styles.ProfileCart}>
                <img src={Profile} />
                <div className={styles.Cart}>
                    <img src={Cart} />
                    <span>{addToCartCount}</span>
                </div>
            </div>
        </header >
    )
};

export default Header;
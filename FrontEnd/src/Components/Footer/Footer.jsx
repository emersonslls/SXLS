/* ---- CSS ---- */
import styles from '../../Styles/Components/Footer.module.css';

/* ---- ASSETS ---- */
import Logo from '../../Assets/Logos/Logo.svg';
/* --- ICONS ---- */
import Instagram from '../../Assets/Icons/Instagram.svg';
import TikTok from '../../Assets/Icons/TikTok.svg';
import Email from '../../Assets/Icons/Email.svg';

import React, { useState } from "react";

function Footer() {
    return (
        <footer>
            <img src={Logo} className={styles.Logo} />
            <div className={styles.Redes}>
                <img src={Instagram} />
                <img src={TikTok} />
            </div>
            <nav className={styles.Nav}>
                <ul>
                    <li>Inicio</li>
                    <li>Produtos</li>
                    <li>Quem Somos?</li>
                    <li>Troca & Devoluções</li>
                </ul>
            </nav>
            <div className={styles.Email}>
                <img src={Email} />
                <h1>sxls.store@gmail.com</h1>
            </div>
            <section className={styles.Rodape}>
                <h1>© Todos os direitos reservados - SXLS</h1>
            </section>
        </footer>
    )
};

export default Footer;
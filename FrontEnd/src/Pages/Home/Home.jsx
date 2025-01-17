import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
/* ---- COMPONENTES ---- */
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

/* ---- CSS ---- */
import '../../Styles/Global/Global.css';
import styles from '../../Styles/Pages/Partials/Home.module.css';

/* --- ASSETS --- */
import Background from '../../Assets/Background.png';
import Cart from '../../Assets/Icons/Carrinho.svg';
/* ---- CAMISETAS ---- */
import BasicFront from '../../Assets/Camisetas/Basic/Black Front.jpg';
import WorldFront from '../../Assets/Camisetas/World/Black Front.jpg';
import WorldBasicFront from '../../Assets/Camisetas/World Basic/Black Front.jpg';

function Home() {
    // Estado para o contador do carrinho
    const [cartCount, setCartCount] = useState(0);

    // Função para adicionar ao carrinho
    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    const product = {
        id: 1,
        name: "Camiseta WorldShock Basic",
        price: 74.99,
        installments: 3,
        installmentPrice: 24.99,
        image: BasicFront,
    };

    const navigate = useNavigate();

    const goToVestuario = () => {
      navigate('/vestuario');
    };
  

    return (
        <>
            <Header addToCartCount={cartCount} />
            <section className={styles.NewColetion}>
                <img src={Background} />
                <h1>WOORLDSSHOCK</h1>
                <button onClick={goToVestuario}>Veja o drop completo</button>
            </section>
            <section className={styles.Highlights}>
                <h1>Destaques</h1>
                <section className={styles.Camisetas}>
                    <section className={styles.WorldShockBasic}>
                        <div className={styles.Camiseta}>
                            <img src={BasicFront} />
                        </div>
                        <div className={styles.InformationProduct}>
                            <div className={styles.NameProduct}>
                                <h4>Camiseta WorldShock Basic</h4>
                            </div>
                            <h2>R$74,99</h2>
                            <h3>
                                <span>3</span>x de <span>&nbsp;R$24,99</span>&nbsp;sem juros
                            </h3>
                        </div>
                        <div className={styles.ContainerAddCart}>
                            <button
                                className={styles.AddCart}
                                onClick={handleAddToCart}
                            >
                                <img src={Cart} />
                            </button>
                        </div>
                    </section>
                    <section className={styles.WorldShockWorld}>
                        <div className={styles.Camiseta}>
                            <img src={WorldFront} />
                        </div>
                        <div className={styles.InformationProduct}>
                            <div className={styles.NameProduct}>
                                <h4>Camiseta WorldShock World</h4>
                            </div>
                            <h2>R$74,99</h2>
                            <h3>
                                <span>3</span>x de <span>&nbsp;R$24,99</span>&nbsp;sem juros
                            </h3>
                        </div>
                        <div className={styles.ContainerAddCart}>
                            <button
                                className={styles.AddCart}
                                onClick={handleAddToCart}
                            >
                                <img src={Cart} />
                            </button>
                        </div>
                    </section>
                    <section className={styles.WorldShockWorldBasic}>
                        <div className={styles.Camiseta}>
                            <img src={WorldBasicFront} />
                        </div>
                        <div className={styles.InformationProduct}>
                            <div className={styles.NameProduct}>
                                <h4>Camiseta WorldShock World Basic</h4>
                            </div>
                            <h2>R$74,99</h2>
                            <h3>
                                <span>3</span>x de <span>&nbsp;R$24,99</span>&nbsp;sem juros
                            </h3>
                        </div>
                        <div className={styles.ContainerAddCart}>
                            <button
                                className={styles.AddCart}
                                onClick={handleAddToCart}
                            >
                                <img src={Cart} />
                            </button>
                        </div>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    );
};

export default Home;

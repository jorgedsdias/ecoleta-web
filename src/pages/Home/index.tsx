import React, { useState, FormEvent } from 'react';
import { FiLogIn, FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => {
    const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>({ 'display': 'none' });
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    function handleOverlay() {
        setShowOverlay(!showOverlay);

        if(showOverlay) {
            setOverlayStyle({ 'display' : 'block' });
        } else {
            setOverlayStyle({ 'display': 'none' });
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <>
            <div id="overlay" style={overlayStyle}>
                <div className="overlay-black"></div>
                <div className="overlay-form">
                    <main>
                        <p>
                            Pontos de coleta
                            <Link to="" onClick={handleOverlay}>
                                <FiX />
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <select 
                                    name="uf" 
                                    id="uf" 
                                    // value="" 
                                    // onChange=""
                                >
                                    <option value="0">Selecione uma UF</option>
                                </select>
                            </div>
                            <div className="field">
                                <select 
                                    name="city" 
                                    id="city"
                                    // value=""
                                    // onChange=""
                                >
                                    <option value="0">Selecione uma Cidade</option>
                                </select>
                            </div>

                            <button type="submit">Buscar</button>
                        </form>
                    </main>
                </div>
            </div>
            <div id="page-home">
                <div className="page-header">
                    <header>
                        <img src={logo} alt="Ecoleta" />

                        <Link to="/create-point">
                            <FiLogIn />
                            Cadastre um ponto de coleta
                        </Link>
                    </header>
                </div>

                <div className="content">
                    <main>
                        <h1>Seu marketplace de coleta de resíduos.</h1>
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                        
                        <Link to="" onClick={handleOverlay}>
                            <span>
                                <FiSearch />
                            </span>
                            <strong>Pesquisar pontos de coleta</strong>
                        </Link>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home;
import React, { useState, FormEvent, CSSProperties } from 'react';
import { FiLogIn, FiSearch, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

import UF from '../../components/UF';
import City from '../../components/City';

const Home = () => {
    const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({ 'display': 'none' });
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    const history = useHistory();

    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

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
        history.push('/filtered-points', { filteredUf: selectedUf, filteredCity: selectedCity });
    }

    return (
        <>
            <div id="overlay" style={overlayStyle}>
                <div className="overlay-black"></div>
                <div className="overlay-content">
                    <main>
                        <p>
                            Pontos de coleta
                            <Link to="" onClick={handleOverlay}>
                                <FiX />
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <UF
                                    selectedUf={selectedUf}
                                    setSelectedUf={setSelectedUf}
                                />
                            </div>
                            <div className="field">
                                <City
                                    selectedUf={selectedUf}
                                    selectedCity={selectedCity}
                                    setSelectedCity={setSelectedCity}
                                />
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
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { FiLogIn, FiSearch, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import logo from '../../assets/logo.svg';

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const Home = () => {
    const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>({ 'display': 'none' });
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    const history = useHistory();

    const [ufs, setUfs] = useState<string[]>([]);
    const [citys, setCitys] = useState<string[]>([]);
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

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);

            setUfs(ufInitials.sort());
        });
    }, []);

    useEffect(() => {
        if(selectedUf === '') {
            return;
        }

        axios
            .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome);
                
                setCitys(cityNames.sort((a, b) => {
                    return a.localeCompare(b);
                }));
        });
    }, [selectedUf]);

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        history.push('/filtered-points', { selectedUf, selectedCity });
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
                                <select 
                                    name="uf" 
                                    id="uf" 
                                    value={selectedUf}
                                    onChange={handleSelectUf}
                                >
                                    <option value="">Selecione uma UF</option>
                                    {ufs.map(uf => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field">
                                <select 
                                    name="city" 
                                    id="city"
                                    value={selectedCity}
                                    onChange={handleSelectCity}
                                >
                                    <option value="">Selecione uma Cidade</option>
                                    {citys.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
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
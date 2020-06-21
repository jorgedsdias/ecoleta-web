import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

interface myProps {
    location: { 
        state: {
            filteredUf: string;
            filteredCity: string;
        }
    };
};

const FilteredPoints = (props: myProps) => {
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        const { filteredUf, filteredCity } = props.location.state
        setUf(filteredUf);
        setCity(filteredCity);
    }, []);

    return (
        <div id="filtered-points">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
            <p className="information-points"><strong>2 pontos</strong> encontrados</p>
            {uf} / {city}
            <ul className="points-grid">
                <li>
                    <img src="http://localhost:3333/uploads/example.svg" alt="" />
                    <strong>Colectoria</strong>
                    <span>Resíduos Eletrôniocos, Lâmpadas, Papéis e Papelão</span>
                    <p>Rio do Sul, Santa Catarina</p>
                </li>
                <li>
                    <img src="http://localhost:3333/uploads/example.svg" alt="" />
                    <strong>Colectoria</strong>
                    <span>Resíduos Eletrôniocos, Lâmpadas</span>
                    <p>Rio do Sul, Santa Catarina</p>
                </li>
                <li>
                    <img src="http://localhost:3333/uploads/example.svg" alt="" />
                    <strong>Colectoria</strong>
                    <span>Resíduos Eletrôniocos, Lâmpadas</span>
                    <p>Rio do Sul, Santa Catarina</p>
                </li>
                <li>
                    <img src="http://localhost:3333/uploads/example.svg" alt="" />
                    <strong>Colectoria</strong>
                    <span>Resíduos Eletrôniocos, Lâmpadas</span>
                    <p>Rio do Sul, Santa Catarina</p>
                </li>
                <li>
                    <img src="http://localhost:3333/uploads/example.svg" alt="" />
                    <strong>Colectoria</strong>
                    <span>Resíduos Eletrôniocos, Lâmpadas</span>
                    <p>Rio do Sul, Santa Catarina</p>
                </li>
                <li>
                    <img src="http://localhost:3333/uploads/example.svg" alt="" />
                    <strong>Colectoria</strong>
                    <span>Resíduos Eletrôniocos, Lâmpadas</span>
                    <p>Rio do Sul, Santa Catarina</p>
                </li>
            </ul>
        </div>
    );
}

export default FilteredPoints;
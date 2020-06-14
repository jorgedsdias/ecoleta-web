import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

const FilteredPoints = (props: any) => {
    const { selectedUf, selectedCity } = props.location.state;
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
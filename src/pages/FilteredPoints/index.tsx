import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface myProps {
    location: { 
        state: {
            filteredUf: string;
            filteredCity: string;
        }
    };
};

interface Point {
    id: number;
    image: string;
    name: string;
    email: string;
    whatsapp: number;
    latitude: number;
    longitude: number;
    city: string;
    uf: string
}

const FilteredPoints = (props: myProps) => {
    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        const { filteredUf, filteredCity } = props.location.state;
        api.get(`points?city=${filteredCity}&uf=${filteredUf}`).then(response => {
            setPoints(response.data);
        });
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
            <p className="information-points"><strong>{points.length} pontos</strong> encontrados</p>
            <ul className="points-grid">
                {points.map(point => (
                    <li>
                        <img src={point.image} alt="" width="352" height="198" />
                        <strong>{point.name}</strong>
                        <span>Resíduos Eletrôniocos, Lâmpadas, Papéis e Papelão</span>
                        <p>{point.city}, {point.uf}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilteredPoints;
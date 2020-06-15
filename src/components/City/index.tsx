import React, { useEffect, useState, ChangeEvent } from 'react';

import axios from 'axios';

interface IBGECityResponse {
    nome: string;
}

interface myProps {
    selectedUf: string;
    selectedCity: string;
    setSelectedCity: any;
}

const City = (props: myProps) => {
    const [citys, setCitys] = useState<string[]>([]);
    const { selectedUf, selectedCity, setSelectedCity } = props;

    useEffect(() => {
        if(selectedUf === '') {
            setCitys([]);
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

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    return (
        <select
            name="city" 
            id="city"
            value={selectedCity}
            onChange={handleSelectCity}
            required
        >
            <option value="">Selecione uma Cidade</option>
            {citys.map(city => (
                <option key={city} value={city}>{city}</option>
            ))}
        </select>
    );
}

export default City;
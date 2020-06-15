import React, { useState, useEffect } from 'react';

import UF from '../../components/UF';
import City from '../../components/City';

const Teste = () => {
    const [selectedUf, setSelectedUf] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        console.log(selectedUf);
    }, [selectedUf]);

    return (
        <>
            <h1>Teste</h1>
            <UF
                selectedUf={selectedUf}
                setSelectedUf={setSelectedUf}
            />

            <City
                selectedUf={selectedUf}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
        </>
    );
}

export default Teste;
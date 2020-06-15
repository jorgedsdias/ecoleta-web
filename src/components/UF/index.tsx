import React, { useEffect, useState, ChangeEvent } from 'react';

import axios from 'axios';

interface IBGEUFResponse {
    sigla: string;
}

interface myProps {
    selectedUf: string;
    setSelectedUf: any;
}

const UF = (props: myProps) => {
    const [ufs, setUfs] = useState<string[]>([]);
    const { selectedUf, setSelectedUf } = props;

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);

            setUfs(ufInitials.sort());
        });
    }, []);

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    return (
        <select 
            name="uf" 
            id="uf" 
            value={selectedUf}
            onChange={handleSelectUf}
            required
        >
            <option value="">Selecione uma UF</option>
            {ufs.map(uf => (
                <option key={uf} value={uf}>{uf}</option>
            ))}
        </select>
    );
}

export default UF;
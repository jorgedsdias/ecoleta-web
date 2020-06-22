import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Item {
    id: number;
    title: string;
    image_url: string;
}

interface myProps {
    point_id: number;
}

const PointItems = (props: myProps) => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        api.get(`point_items?point_id=${props.point_id}`).then(response => {
            setItems(response.data);
        });
    }, []);

    return (
        <>
            {items.map(item => `${item.title}, `)}
        </>
    );
}

export default PointItems;
import React from 'react';
import {useParams} from "react-router-dom";

const User = () => {

    const params = useParams(); // хук для получения доступа к параметрам после слеша (users => /:id)

    return (
        <h2>Selected user ID: {params.id} </h2>
    );
}

export default User;
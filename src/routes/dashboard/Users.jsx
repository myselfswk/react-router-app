import React from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
    const { id } = useParams()

    return (
        <div>
            Users
            {id && <p>ID: {id}</p>}
        </div>
    )
}

export default Users;
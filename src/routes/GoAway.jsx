import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoAway = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [])

    return (
        <div>GoAway</div>
    )
}

export default GoAway;
import React from 'react';
import './style.css';

interface UserCardProps {
    name: string;
    age: number;
}

const UserCard = ({name, age}:UserCardProps) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
    );
};

export default UserCard;
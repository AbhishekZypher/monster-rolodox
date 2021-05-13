import React from 'react';
import './Card.style.css';

export const Card = (props) => ( //in single function this returns dureclty without the need for return statement
    <div className='card-container'>
        <img
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);
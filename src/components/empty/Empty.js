import React from 'react';

import './styles.css';

import EmptyImage from '../../assets/DatasetemptyIcon.png';

export default function Empty() {
    return(
        <div className="empty-container">
            <img src={EmptyImage} alt="Vazio"/>
            <h2>There is still nothing here</h2>
            <h3>Add some repositories by clicking add new repository</h3>
        </div>
        
    );
}
import React from 'react';

import './styles.css';

export default function Filters({id="modal", onFilterClose = () => {}}) {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onFilterClose();
    };

    return(
        <div id={id} className="filters-container" onClick={handleOutsideClick}>
            <span>Order by</span>
            <button onClick={onFilterClose}>stars</button>
            <button onClick={onFilterClose}>Forks</button>
            <button onClick={onFilterClose}>Open issues</button>
            <button onClick={onFilterClose}>age</button>
            <button onClick={onFilterClose}>Last commit</button>
        </div>
    );
};
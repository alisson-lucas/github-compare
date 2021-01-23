import React from 'react';

import './styles.css';

const DeleteModal = ({deleteItem,id="modal", onClose = () => {}, name, ind}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    };

    function handleDelete(){
        deleteItem(ind);
    }

    return(
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="delete-container">
                <div className="header">
                    <p>Delete repository</p>
                </div>
                <div className="body">
                    <span>Are you sure to delete the { name } repository?</span>
                </div>
                <div className="footer">
                    <button id="btn-cancel" onClick={onClose}>Cancel</button>
                    <button id="btn-delete" onClick={handleDelete}>Delete</button>
                </div>
                    
            </div>
        </div>
    )
}

export default DeleteModal;
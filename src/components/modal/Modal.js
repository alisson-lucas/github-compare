import React from 'react';

import './styles.css';

const Modal = ({onClose = () => {}, Children}) => {
    return (
        <div className="modal-container">
            <div className="content"> 
                <h3>New Repository</h3>
                <h4>Repository</h4>
                <input></input>
                <hr/>
                <div className="footer">
                    <button className="cancel" onClick={onClose}>Cancel</button>
                    <button id="add">Add</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
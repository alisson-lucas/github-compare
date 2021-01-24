import React,{useContext} from 'react';
import { CounterContext } from '../../contexts/counterContext';
import { PageContext } from '../../contexts/pageContext';
import './styles.css';

const DeleteModal = ({deleteItem,id="modal", onClose = () => {}, name, ind}) => {
    const { count, setCount } = useContext(CounterContext);
    const {isEmpty, setIsEmpty} = useContext(PageContext);

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    };

    function handleDelete(){
        deleteItem(ind);
        setCount(count - 1);
        if(count <= 1) {
            setIsEmpty(true);
        }
        onClose();
        console.log(isEmpty);
        console.log(count);
    };

    return(
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="delete-container">
                <div className="header">
                    <p>Delete repository</p>
                </div>
                <div className="body">
                    <span>Are you sure to delete this repository?</span>
                </div>
                <div className="delete-footer">
                    <button id="btn-cancel" onClick={onClose}>Cancel</button>
                    <button id="btn-delete" onClick={handleDelete}>Delete</button>
                </div>
                    
            </div>
        </div>
    )
}

export default DeleteModal;
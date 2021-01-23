import React from 'react';

import './styles.css';

const DeleteModal = ({onClose = () => {}}) => {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isModalVisible : false
    //     }
    //     this.props.

    //     this.handleModalVisible = this.handleModalVisible.bind(this);
    // }

    // handleModalVisible(){
    //     this.setState({isModalVisible : true});
    //     console.log(this.state.isModalVisible);
    // }

    // render(){
        return(
            <div className="modal">
                <div className="delete-container">
                    <div className="header">
                        <p>Delete repository</p>
                    </div>
                    <div className="body">
                        <span>Are you sure to delete the liferay/senna.js
                        repository?</span>
                    </div>
                    <div className="footer">
                        <button id="btn-cancel" onClick={onClose}>Cancel</button>
                        <button id="btn-delete">Delete</button>
                    </div>
                    
                </div>
            </div>
        )
    // }
}

export default DeleteModal;
import React, {Component} from 'react';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineTrash } from "react-icons/hi";
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import Logo from '../../assets/liferay-icon.png';

import DeleteModal from '../deleteModal/DeleteModal';


import './styles.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible : false
        }

        this.handleModalVisible = this.handleModalVisible.bind(this);
    }

    handleModalVisible(){
        this.setState({isModalVisible : true});
        console.log(this.state.isModalVisible);
    }

    handleModalInvisible(){
        
        this.setState({isModalVisible : false});
        console.log(this.state.isModalVisible);
    }

    render(){
        let {isModalVisible} = this.state

        return(
            <div className="dashboard-container">
                <ul>
                    <li>
                    <div className="card">
                        <div className="card-header">
                            <img src={Logo} alt="Liferay"/>
                            <p className="title">liferay/liferay-portal</p>
                            <div className="icon-buttons">
                                <button><FaRegStar size="20px" /></button>
                                <button onClick={this.handleModalVisible}><HiOutlineTrash size="20px" /></button>
                                {isModalVisible ? <DeleteModal onClose={() => this.state.isModalVisible}  /> : null}
                            </div>
                        </div>
                        <div className="card-body">
                            <p><b>Stars</b> 1618</p>
                            <p><b>Forks</b> 2256</p>
                            <p><b>Open Issues</b> 10</p>
                            <p><b>Age</b> 11 years ago</p>
                            <p><b>Last commit</b> 5 hours ago</p>
                            <p><b>License</b> N/A</p>
                            <button>javascript</button>
                        </div>
                    </div>
                    </li>
                   
                </ul>
            </div>
        );
    }
};

export default Card;
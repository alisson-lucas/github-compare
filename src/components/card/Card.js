import React, { useState} from 'react';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineTrash } from "react-icons/hi";
// import {useHistory} from 'react-router-dom';
// import api from '../../services/api';
import { useRepo } from '../../contexts/RepoContext';

import Logo from '../../assets/liferay-icon.png';

import DeleteModal from '../deleteModal/DeleteModal';


import './styles.css';

const Card = () => {
    const {repos} = useRepo();
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const data = repos.map()
// class Card extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isModalVisible : false
    //     }

    //     this.handleModalVisible = this.handleModalVisible.bind(this);
    // }
    
    // static contextType = RepoContext;

    // handleModalVisible(){
    //     this.setState({isModalVisible : true});
    //     console.log(this.state.isModalVisible);
    // }

    // handleModalInvisible(){
        
    //     this.setState({isModalVisible : false});
    //     console.log(this.state.isModalVisible);
    // }

    // render(){
    //     let {isModalVisible} = this.state

        return(
            <div className="dashboard-container">
                <ul>
                    {/* {context.map(repo=> ( */}
                    {repos.map(repo=> (
                    <li key={repo.id} repo={repo}>

                    <div className="card" >
                        <div className="card-header">
                            <img src={Logo} alt="Liferay"/>
                            <p className="title">{repo.full_name}</p>
                            <div className="icon-buttons">
                                <button><FaRegStar size="20px" /></button>
                                <button onClick={() => setIsModalVisible(true)}><HiOutlineTrash size="20px" /></button>
                                {isModalVisible ? <DeleteModal onClose={() => setIsModalVisible(false)}  /> : null}
                            </div>
                        </div>
                        <div className="card-body">
                            <p><b>Stars</b> {repo.stars}</p>
                            <p><b>Forks</b> {repo.forks}</p>
                            <p><b>Open Issues</b> {repo.open_issues}</p>
                            <p><b>Age</b> 11 years ago</p>
                            <p><b>Last commit</b> 5 months ago</p>
                            <p><b>License</b> {repo.license}</p>
                            <button>{repo.language}</button>
                        </div>
                    </div>
                    </li>
                    ))}
                    {/* ))} */}
                </ul>
            </div>
        );
    // }
};

export default Card;
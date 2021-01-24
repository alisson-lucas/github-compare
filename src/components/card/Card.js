import React, { useState} from 'react';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineTrash } from "react-icons/hi";
import { useRepo } from '../../contexts/RepoContext';

import Logo from '../../assets/liferay-icon.png';

import DeleteModal from '../deleteModal/DeleteModal';

import './styles.css';

const Card = () => {
    const {repos, setRepos} = useRepo();
    const [isModalVisible, setIsModalVisible] = useState(false);

    function deleteItem(key){
        const filteredItems = repos.filter(repo =>
            repo.id !==key);
        setRepos(filteredItems)
    
    }
    
    return(
        <div className="dashboard-container">
            <ul>
                {repos.map(repo=> (
                <li key={String(repo.id)} repo={repo}>
                    <div className="card" >
                        <div className="card-header">
                            <img src={Logo} alt="Liferay"/>
                            <p className="title">{repo.full_name}</p>
                            <div className="icon-buttons">
                                <button><FaRegStar size="20px" /></button>
                                <button onClick={() => setIsModalVisible(true,repo.id)}><HiOutlineTrash size="20px" /></button>
                                {isModalVisible ? <DeleteModal deleteItem={deleteItem} name={repo.full_name} ind={repo.id} onClose={() => setIsModalVisible(false)}  /> : null}
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
            </ul>
        </div>
    );
};

export default Card;
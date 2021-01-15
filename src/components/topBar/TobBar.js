import React, {useState} from 'react';

import './styles.css';

import Icon from '../../assets/github-icon.png';
import Star from '../../assets/star-o.png';
import Adjusts from '../../assets/adjust.png';
import Cards from '../../assets/cards2.png';

import Modal from '../modal/Modal';

export default function TopBar() {
    const[isModalVisible, setIsModalVisible] = useState(false)
    return(
        <div className="container">
            <div className="items">
                <img src={Icon} alt="Github Compare"/>
                <a>Github Compare</a>
                <a>Filter and Other</a>
                <input className="search" placeholder="Search"></input>
                <img src={Star} alt="Favorite"/>
                <img src={Adjusts} alt="Adjusts"/>
                <img src={Cards} alt="Cards"/>
                <button onClick={() => setIsModalVisible(true)}>+</button>
                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
            </div>
        </div>
        
    );
}
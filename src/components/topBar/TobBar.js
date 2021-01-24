import React, {useState} from 'react';
import { AiFillGithub } from "react-icons/ai";
import { IoMdArrowDropdown, IoIosSearch } from "react-icons/io"

import './styles.css';

import Star from '../../assets/star-o.png';
import Adjusts from '../../assets/adjust.png';
import Cards from '../../assets/cards2.png';
import Filters from '../filters/Filters';

import Modal from '../modal/Modal';

export default function TopBar() {
    const[isModalVisible, setIsModalVisible] = useState(false)
    const[isFilterVisible, setIsFilterVisible] = useState(false)
    return(
        <div className="container">
            <div className="items">
                <AiFillGithub size="27px" />
                <span>Github Compare</span>
                <button id="filter" onClick={() => setIsFilterVisible(true)}>Filter and Other <IoMdArrowDropdown id="arrow" size="20px" /></button>
                {isFilterVisible ? <Filters onFilterClose={() => setIsFilterVisible(false)} /> : null}
                <input className="search" placeholder='Search'></input>
                <img src={Star} alt="Favorite"/>
                <img src={Adjusts} alt="Adjusts"/>
                <img src={Cards} alt="Cards"/>
                <button onClick={() => setIsModalVisible(true)}>+</button>
                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}  /> : null}
            </div>
        </div>
    );
}
    
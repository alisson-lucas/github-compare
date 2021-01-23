import React, {useState} from 'react';
import { AiFillGithub } from "react-icons/ai";

import './styles.css';

import Star from '../../assets/star-o.png';
import Adjusts from '../../assets/adjust.png';
import Cards from '../../assets/cards2.png';

import Modal from '../modal/Modal';

// class TopBar extends Component {
    export default function TopBar() {
        const[isModalVisible, setIsModalVisible] = useState(false)
        // constructor(props){
        //     super(props);
        //     this.state = {
        //         isModalVisible : false
        //     }
    
        //     this.handleModalVisible = this.handleModalVisible.bind(this);
        // }
    
        // handleModalVisible(){
        //     this.setState({isModalVisible : true});
        //     console.log(this.state.isModalVisible);
        // }
    
        // handleModalInvisible(){
        //     this.setState({isModalVisible : false});
        // }
        
        // render() {
            // let {isModalVisible} = this.state
    
    
            return(
                <div className="container">
                    <div className="items">
                        <AiFillGithub size="27px" />
                        {/* <img src={Icon} alt="Github Compare"/> */}
                        <span>Github Compare</span>
                        <span>Filter and Other</span>
                        <input className="search" placeholder="Search"></input>
                        <img src={Star} alt="Favorite"/>
                        <img src={Adjusts} alt="Adjusts"/>
                        <img src={Cards} alt="Cards"/>
                        <button onClick={() => setIsModalVisible(true)}>+</button>
                        {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}  /> : null}
                    </div>
                </div>
            );
        // }
    }
    
    // export default TopBar; 
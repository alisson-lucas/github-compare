import React, {useState, Component} from 'react';

import './styles.css';

import Icon from '../../assets/github-icon.png';
import Star from '../../assets/star-o.png';
import Adjusts from '../../assets/adjust.png';
import Cards from '../../assets/cards2.png';

import Modal from '../modal/Modal';

class TopBar extends Component {
// export default function TopBar() {
    // const[isModalVisible, setIsModalVisible] = useState(false)
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
    }
    
    render() {
        let {isModalVisible} = this.state


        return(
            <div className="container">
                <div className="items">
                    <img src={Icon} alt="Github Compare"/>
                    <span>Github Compare</span>
                    <span>Filter and Other</span>
                    <input className="search" placeholder="Search"></input>
                    <img src={Star} alt="Favorite"/>
                    <img src={Adjusts} alt="Adjusts"/>
                    <img src={Cards} alt="Cards"/>
                    <button onClick={this.handleModalVisible}>+</button>
                    {isModalVisible ? <Modal onClose={this.state.isModalVisible}  /> : null}
                </div>
            </div>
        );
    }
}

export default TopBar; 
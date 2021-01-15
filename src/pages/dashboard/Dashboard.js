import React, { useState } from 'react';

import './styles.css';

import Logo from '../../assets/liferay-icon.png';
import Star from '../../assets/star-o.png';

import TopBar from '../../components/topBar/TobBar';
import Empty from '../../components/empty/Empty'

export default function Dashborad() {
    return(
        <div className="dashboard-container">
            <TopBar />
            {/* <Empty /> */}
            <div className="card">
                <div className="card-header">
                    <img src={Logo} alt="Liferay"/>
                    <p className="title">liferay/liferay-portal</p>
                </div>
                <div className="card-body">
                    <p>Stars</p>
                    <p>Forks</p>
                    <p>Open Issues</p>
                    <p>Age</p>
                    <p>Last commit</p>
                    <p>License</p>
                </div>
            </div>
        </div>
        
    );
}
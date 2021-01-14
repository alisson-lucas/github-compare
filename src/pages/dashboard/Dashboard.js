import React, { useState } from 'react';

import './styles.css';

import TopBar from '../../components/topBar/TobBar';
import Empty from '../../components/empty/Empty'

export default function Dashborad() {
    return(
        <div className="dashboard-container">
            <TopBar />
            <Empty />
        </div>
        
    );
}
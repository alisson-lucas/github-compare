import React, { useContext } from 'react';
import './styles.css';

import TopBar from '../../components/topBar/TobBar';
import Card from '../../components/card/Card';
import Empty from '../../components/empty/Empty';
import { PageContext } from '../../contexts/pageContext';

export default function Dashborad() {
    const {isEmpty} = useContext(PageContext);
    
    return(
        <div className="dashboard-container">
            <TopBar />
            {isEmpty ? <Empty /> : <Card /> }
        </div>
    );
}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard'
import Modal from './components/modal/Modal'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
} 
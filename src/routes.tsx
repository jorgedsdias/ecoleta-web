import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import FilteredPoints from './pages/FilteredPoints';
import Teste from './pages/Teste';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
            <Route component={FilteredPoints} path="/filtered-points" />
            <Route component={Teste} path="/teste" />
        </BrowserRouter>
    );
}

export default Routes;
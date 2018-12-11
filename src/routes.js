import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

export default (
    <Switch>
        <Route path="/route1" component={Route1} />
        <Route path="/route2" component={Route2} />
        <Route exact path="/route3/" component={Route3} />
        <Route path="/route3/:words" component={Route3} />
    </Switch>
)
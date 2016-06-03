import React from 'react';
import { Router, Route,IndexRoute  } from 'react-router';
import {App,Home,Timing} from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="timing/:roadName" component={Timing} />
  </Route>
)

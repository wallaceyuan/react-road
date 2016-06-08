import React from 'react';
import { Router, Route,IndexRoute,browserHistory  } from 'react-router';
import { App ,Home ,Timing ,Section ,Smoney } from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="timing/"  component={Timing} />
    <Route path="section/" component={Section} />
    <Route path="smoney/"  component={Smoney} />
  </Route>
)

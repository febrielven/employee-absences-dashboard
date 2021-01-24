import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {routes} from './RouteList'

export default function MainRoute() {
  return (
    <Switch>
      {routes.map((route, index) => {
        return <Route key={index} {...route} />
      })}
    </Switch>
  );
}

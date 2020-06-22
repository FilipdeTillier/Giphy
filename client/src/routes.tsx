import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import ImagesPage from './pages/ImagesPage';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/">
            <ImagesPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;

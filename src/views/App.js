// App.js (or your root component)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming you have a sidebar component
import routes from './routes';

const App = () => {
  return (
    <Router>
      <Sidebar /> {/* Assuming you have a Sidebar component to display the links */}
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            render={(props) => <route.component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;

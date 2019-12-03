import React from 'react';
import './assets/App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
const App: React.FC = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
    
  );
}

export default App;

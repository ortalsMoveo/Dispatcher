import './App.css';
import MainPage from './fetchers/MainPage/MainPage';
import WelcomePage from './fetchers/WelcomePage/WelcomPage';
import { Route, Switch,} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={MainPage} />
        <Route path="/" component={WelcomePage}/>
      </Switch>
    </>
  );
}

export default App;

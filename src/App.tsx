import './App.css';
import MainPage from './fetchers/MainPage/MainPage';
import WelcomePage from './fetchers/WelcomePage/WelcomPage';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import React from 'react';
import SearchScreen from './components/Tablet&Mobile/SearchScreen/SearchScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={MainPage} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/" component={WelcomePage}/>
      </Switch>
    </Router>
  );
}

export default App;

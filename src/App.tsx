import './App.css';
import MainPage from './fetchers/MainPage/MainPage';

import WelcomePage from './fetchers/WelcomePage/WelcomPage';
const device = 'Desktop';

function App() {
  return (
    <MainPage device={device}/>
//     <WelcomePage />
  );
}

export default App;

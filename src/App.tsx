import './App.css';
import MainPage from './fetchers/MainPage/MainPage';

const device = 'Tablet';

function App() {
  return (
    <MainPage device={device}/>
  );
}

export default App;

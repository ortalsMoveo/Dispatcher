import './App.css';
import MainPage from './fetchers/MainPage/MainPage';

const device = 'Desktop';

function App() {
  return (
    <MainPage device={device}/>
  );
}

export default App;

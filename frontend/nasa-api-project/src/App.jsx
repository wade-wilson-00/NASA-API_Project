import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MarsWeather from './components/MarsWeather.jsx';
import Neo from './components/Neo.jsx';
import Apod from './components/Apod.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/mars" element={<MarsWeather />} />
        <Route path="/neo" element={<Neo />} />
      </Routes>
    </Router>
  );
}

export default App;

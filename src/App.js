import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Motorcycles from './components/motorcycles';
import Reservations from './components/reservations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="motorcycles/" element={<Motorcycles />} />
        <Route path="reservations/" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Motorcycles from './components/Motorcycles';
import Navbar from './components/Navbar';
import Reservations from './components/Reservations';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="motorcycles/" element={<Motorcycles />} />
          <Route path="reservations/" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

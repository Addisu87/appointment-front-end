import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Motorcycles from './components/Motorcycle/Motorcycles';
import Navigation from './components/Navigation';
import Reservations from './components/Reservation/Reservations';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="motorcycles/" element={<Motorcycles />} />
          <Route path="reservations/" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

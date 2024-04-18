import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import {LoginSignup,SignUp} from './components/LoginSignup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ride from './components/Ride';
import Drive from './components/Drive';
import YourRide from './components/YourRide';
import About from './components/About';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/ride" element={<Ride/>}></Route>
        <Route path="/drive" element={<Drive/>}></Route>
        <Route path="/yourrides" element={<YourRide/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer ></Footer>
    </div>
  );
}

export default App;

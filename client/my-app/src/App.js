import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import {LoginSignup,SignUp} from './components/LoginSignup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer ></Footer>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import {LoginSignup,SignUp} from './components/LoginSignup';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className='App'> 
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
        <Route path='/signup' element ={<SignUp />}></Route>
      </Routes>  
    </div>
  );
}

export default App;

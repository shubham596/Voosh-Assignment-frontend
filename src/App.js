import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import Header from './component/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  return (
    <Router>
   
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
     
<Toaster position="bottom-center" />
    </Router>
  );
}

export default App;

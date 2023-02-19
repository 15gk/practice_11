import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Single_Course from './pages/Single_Course';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="courses/:coursesid" element ={<Single_Course/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  )
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Other from './Components/Other/Other';

function App() {
  return (
    <div className="container">
        <div className="header">
          <Header/>
        </div>
        <Router>
        <div>
          <Navbar/>
        </div>
        <div>
          <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/helpdesk' element={<Other />} />
          <Route path='/mytasks' element={<Other />} />
          <Route path='/projects' element={<Other />} />
          <Route path='/clients' element={<Other />} />
          <Route path='/invoice' element={<Other />} />
          <Route path='/report' element={<Other />} />
          <Route path='/settings' element={<Other />} />
          </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;

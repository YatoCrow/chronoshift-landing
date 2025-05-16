import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faction' element={<div>Factions Page</div>} />
        <Route path='/starter-decks' element={<div>Starter Decks Page</div>} />
        <Route path='/rules' element={<div>Rules Page</div>} />
        <Route path='/keywords' element={<div>Keywords Page</div>} />
        <Route path='/tracker' element={<div>Tracker Page</div>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
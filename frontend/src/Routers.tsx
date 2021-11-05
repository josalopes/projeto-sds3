import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default Routers
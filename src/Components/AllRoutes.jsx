import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contacts from './Contacts';
import Homepage from './Homepage';
import Projects from './Projects';
import Skills from './Skills';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default AllRoutes;
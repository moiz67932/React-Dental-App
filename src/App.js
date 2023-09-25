import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Featuring from './components/Featuring';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Featuring/>
    <Testimonials/>
    </>
  );
}

export default App;

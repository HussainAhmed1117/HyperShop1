import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import './App.css';
import ContextWrapper from './context/ContextWrapper';


export default function App() {
  return (
    <ContextWrapper>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
    </ContextWrapper>
  )
}

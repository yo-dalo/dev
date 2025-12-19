import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Onboarding from './page/Onboarding';

import UserDashboard from './page/UserDashboard';

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/two" element={<Onboarding />} />
        <Route path="/one" element={<Login />} />







      </Routes>
    </>
  )
}

export default App

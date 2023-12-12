import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="w-screen h-screen bg-zinc-800 flex flex-col ">
      <Navbar
        isLoggedin={isLoggedin}
        setIsLoggedin={setIsLoggedin}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin} />} />
        <Route path='/signup' element={<Signup setIsLoggedin={setIsLoggedin} />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App

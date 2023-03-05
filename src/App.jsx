import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route index element = {<Home />} />
        <Route path = "/Home" element = {<Home />} />
        <Route path = "*" element = {<NoPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

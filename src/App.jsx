import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Presidential from './pages/Presidential';
import NoPage from './pages/NoPage';
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div>
      <HashRouter>
       <Navbar />
       <Routes>
        <Route index element = {<Home />} />
        <Route path = "/Home" element = {<Home />} />
        <Route path = "/Presidential" element = {<Presidential />} />
        <Route path = "*" element = {<NoPage />} />
       </Routes>
      </HashRouter>
    </div>
  )
}

export default App

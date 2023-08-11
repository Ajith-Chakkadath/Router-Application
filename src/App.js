import React from 'react'
import Navbar from './component/navbar'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Aboutus from './pages/Aboutus'

function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/aboutus' element={<Aboutus/>} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Menu from './Menu/Menu'
import News from './News/News'
import About from './About/About'
import Contact from './Contact/Contact'
import SignIn from './Login/SignIn'
import SignUp from './Login/SignUp'
import Forgot from './Login/Forgot'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot' element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
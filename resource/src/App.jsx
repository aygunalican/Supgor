import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'

import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Notfoundpage from './pages/Notfoundpage'
import './assets/css/mode.css'
import { ModeContext } from './pages/ModeProvider'
import Basket from './pages/Basket'
function App() {

const [mode, setMode]=useContext(ModeContext);
  return (
    <>
      <div className={mode}>
        <BrowserRouter>

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/products/:id" element={<Productdetails />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </div>
    </>
  )
}

export default App

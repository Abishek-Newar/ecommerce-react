import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './pages/landing/landing'
import AboutUs from './pages/About/AboutUs'
import Cart from './pages/cart/Cart'
import UserAuth from './pages/UserAuth/UserAuth'
import MenSection from './pages/MenSection/MenSection'
import WomenSection from './pages/WomenSection/WomenSection'
import KidsSection from './pages/KidsSection/KidsSection'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path="/about" element ={<AboutUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/auth"element ={<UserAuth/>}/>
        <Route path="/men" element={<MenSection />}/>
        <Route path="/women" element={<WomenSection />}/>
        <Route path="/kids" element={<KidsSection />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

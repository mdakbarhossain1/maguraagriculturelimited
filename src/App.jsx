
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

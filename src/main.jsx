// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter, Route, Routes } from 'react-router'
// import App from './App'
// import NavBar from "./components/NavBar"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import { useState } from 'react'
import Blog from "./components/Blog.jsx"
import Contact from "./components/Contact.jsx"
// import Footer from "./components/Footer.jsx"
import NavBar from "./components/NavBar.jsx"
import Works from "./components/Work.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
       <NavBar /> {/* Navigáció sáv */}
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/works' element={<Works />} />
        </Routes>
     </BrowserRouter>
  </StrictMode>,
)
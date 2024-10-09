import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NavComponent from './components/nav/nav'
import FooterComponent from './components/footer/footer'
import DashboardComponent from './pages/dashboard/dashboard'
import ServiciosComponent from './pages/servicios/servicios'
import NosotrosComponent from './pages/nosotros/nosotros'

function App() {
  return (
    <div className='h-full w-full'>
      <BrowserRouter>
        <NavComponent/>
          <Routes>
            <Route path="/" element={<Navigate to="/Dashboard" />} />
            <Route path="*" element={<Navigate to="/Dashboard" />} />
            <Route path="/Dashboard" element={<DashboardComponent />} />
            <Route path='/Servicios' element={<ServiciosComponent/>} />
            <Route path='/Nosotros' element={<NosotrosComponent/>} />
          </Routes>
        <FooterComponent/>
    </BrowserRouter>
    </div>
  )
}

export default App

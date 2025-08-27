import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import AdminLayout from './components/Layout/AdminLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right' />
      <Routes>
        <Route path="/" element={<UserLayout />} >
        <Route index element={<Home/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
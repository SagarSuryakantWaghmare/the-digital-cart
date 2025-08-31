import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import AdminLayout from './components/Layout/AdminLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'sonner'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import Checkout from './components/Cart/Checkout'
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position='top-right' />
      <Routes>
        <Route path="/" element={<UserLayout />} >
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='collection/:collection' element={<CollectionPage/>}/>
        <Route path='product/:id' element={<ProductPage/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
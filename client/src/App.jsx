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
import ProductDetails from './components/Products/ProductDetails'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import OrderDetailsPage from './pages/OrderDetailsPage'
import MyOrdersPage from './components/Products/MyOrdersPage'
// import ProductPage from './components/Products/'
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
        <Route path='product/:id' element={<ProductDetails/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='order-confirmation' element={<OrderConfirmationPage/>}/>
        <Route path='order/:id' element={<OrderDetailsPage/>}/>
        <Route path='my-orders' element={<MyOrdersPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
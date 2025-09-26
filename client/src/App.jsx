import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import AdminLayout from './components/Admin/AdminLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'sonner'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import CartPage from './pages/CartPage'
import Checkout from './components/Cart/Checkout'
import ProductDetails from './components/Products/ProductDetails'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import OrderDetailsPage from './pages/OrderDetailsPage'
import MyOrdersPage from './components/Products/MyOrdersPage'
import AdminHomePage from './pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductMangement from './components/Admin/ProductMangement'
import EditProductPage from './components/Admin/EditProductPage'
import OrderMangement from './components/Admin/OrderMangement'

// Footer Pages
import Contact from './pages/Contact'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Shipping from './pages/Shipping'
import Returns from './pages/Returns'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'

import { Provider } from 'react-redux';
import store from './redux/store';
import ProtectedRoute from './components/Common/ProtectedRoute'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position='top-right' />
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='collections/:collection' element={<CollectionPage />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path='products/:id' element={<ProductDetails />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='order-confirmation' element={<OrderConfirmationPage />} />
            <Route path='order/:id' element={<OrderDetailsPage />} />
            <Route path='my-orders' element={<MyOrdersPage />} />
            
            {/* Footer Pages */}
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='shipping' element={<Shipping />} />
            <Route path='returns' element={<Returns />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='terms' element={<Terms />} />
            <Route path='cookies' element={<Cookies />} />
          </Route>
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          } >
            <Route index element={<AdminHomePage />} />
            <Route path='users' element={<UserManagement />} />
            <Route path='products' element={<ProductMangement />} />
            <Route path='products/:id/edit' element={<EditProductPage />} />
            <Route path='orders' element={<OrderMangement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
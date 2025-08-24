import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import Banner from '../Common/Banner'
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
    <div>
        <Banner/>
        <Navbar/>
        {/* main */}
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default UserLayout
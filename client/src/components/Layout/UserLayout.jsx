import React, { useEffect } from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import Banner from '../Common/Banner'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../redux/slice/cartSlice'

const UserLayout = () => {
  const dispatch = useDispatch();
  const { user, guestId } = useSelector((state) => state.auth);
  
  useEffect(() => {
    // Fetch cart when component mounts
    const userId = user?._id;
    dispatch(fetchCart({ userId, guestId }));
  }, [dispatch, user, guestId]);

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
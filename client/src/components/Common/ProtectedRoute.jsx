import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children, role }) => {
    const { user } = useSelector((state) => state.auth);
    
    // If no user is logged in, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />
    }
    
    // If a specific role is required and user doesn't have it, redirect to login
    if (role && user.role !== role) {
        return <Navigate to="/login" replace />
    }
    
    return children;
}

export default ProtectedRoute
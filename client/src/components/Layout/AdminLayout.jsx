import React from 'react'
import { Navigate } from 'react-router-dom'

// This file is deprecated - use components/Admin/AdminLayout.jsx instead
const AdminLayout = () => {
  return <Navigate to="/admin" replace />
}

export default AdminLayout
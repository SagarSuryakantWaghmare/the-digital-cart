import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <div className='min-h-screen flex flex-col md:flex-row bg-gray-50'>
            {/* Mobile Header */}
            <div className='flex md:hidden p-4 bg-gray-900 text-white z-30 items-center shadow-md'>
                <button 
                    onClick={toggleSidebar} 
                    className="mr-4 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                >
                    <Menu size={20} />
                </button>
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-900">🛒</span>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Admin Portal</h1>
                        <p className="text-xs text-gray-300">Digital Cart Management</p>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className='fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden transition-opacity duration-300'
                    onClick={toggleSidebar}
                >
                </div>
            )}

            {/* Sticky Sidebar - Fixed position on desktop */}
            <div className={`bg-gray-900 w-72 text-white fixed md:sticky top-0 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out z-20 shadow-lg ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}>
                <AdminSidebar />
            </div>

            {/* Main Content Area - Scrollable */}
            <div className="flex-grow min-h-screen overflow-y-auto">
                <div className="p-6 max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[calc(100vh-3rem)] p-6">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
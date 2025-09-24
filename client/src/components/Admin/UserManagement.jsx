import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Users, UserPlus, Trash2 } from 'lucide-react'
import {addUser,updateUser,deleteUser,fetchUsers} from '../../redux/slice/adminSlice';
import LoadingSpinner from '../Common/LoadingSpinner';
const UserManagement = () => {
    // const users = [
    //     {
    //         _id:12412,
    //         name: "Sam Pawar",
    //         email: "sam@gmail.com",
    //         role: "admin",
    //     }
    // ]

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { users, loading, error } = useSelector((state) => state.admin);
    useEffect(() => {
        if (user && user.role !== 'admin') {
            navigate("/")
        }
    },[user,navigate])

    useEffect(()=>{
        if(user&&user.role==='admin'){
            dispatch(fetchUsers());
        }
    },[user,dispatch])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        })
    }
    const handleRoleChange = (userId, newRole) => {
        console.log("Role change requested:", { id: userId, role: newRole });
        // Find the user to get their current name and email
        const userToUpdate = users.find(user => user._id === userId);
        if (userToUpdate) {
            console.log("User found for update:", userToUpdate);
            const updateData = {
                id: userId,
                name: userToUpdate.name,
                email: userToUpdate.email,
                role: newRole
            };
            console.log("Dispatching update with data:", updateData);
            dispatch(updateUser(updateData));
        } else {
            console.error("User not found for ID:", userId);
        }
    }

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(userId));
            console.log("Deleting user with Id", userId);
        }
    }
    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className='text-3xl font-bold text-gray-900 flex items-center'>
                        <div className="p-3 bg-green-600 rounded-lg mr-4">
                            <Users className="text-white w-6 h-6" />
                        </div>
                        User Management
                    </h2>
                    <p className="text-gray-600 mt-2">Manage user accounts and permissions</p>
                </div>
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
                    <span className="font-bold text-lg">{users.length}</span>
                    <p className="text-sm opacity-90">Total Users</p>
                </div>
            </div>

            {loading && <LoadingSpinner size="md" text="Loading users..." />}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    <p className="font-medium">Error loading users</p>
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {/* Add User Form */}
            <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h3 className='text-xl font-bold mb-6 flex items-center'>
                    <UserPlus className="text-green-600 w-5 h-5 mr-2" />
                    Add New User
                </h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Name</label>
                        <input
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Password</label>
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Role</label>
                        <select name="role" value={formData.role}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500'>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type='submit'
                            className='bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2'>
                            <UserPlus className="w-4 h-4" />
                            <span>Add User</span>
                        </button>
                    </div>
                </form>
            </div>
            {/* Users Table */}
            <div className='bg-white border border-gray-200 rounded-lg overflow-hidden'>
                <div className='px-6 py-4 border-b border-gray-200 bg-gray-50'>
                    <h3 className='text-lg font-semibold text-gray-900'>All Users</h3>
                </div>
                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>User</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Role</th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {users.map((user) => (
                                <tr key={user._id} className='hover:bg-gray-50'>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                        {user.email}
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <select
                                            value={user.role}
                                            className='px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                            onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                            disabled={loading}>
                                            <option value="customer">Customer</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <button
                                            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2'
                                            onClick={() => handleDeleteUser(user._id)}>
                                            <Trash2 className="w-4 h-4" />
                                            <span>Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserManagement
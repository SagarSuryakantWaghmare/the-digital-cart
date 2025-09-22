import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {addUser,updateUser,deleteUser,fetchUsers} from '../../redux/slice/adminSlice';
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
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-4'>User Management</h2>
            {loading&&<p>Loading...</p>}
            {error&&<p>Error:{error}</p>}
            <div className='p-6 rounded-lg mb-6'>
                <h3 className='text-lg font-bold mb-4'>
                    Add New User
                </h3>
                <form onSubmit={handleSubmit} >
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Password</label>
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Role</label>
                        <select name="role" value={formData.role}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type='submit'
                        className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
                        Add User
                    </button>
                </form>

            </div>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <th className='py-3 px-4'>Name</th>
                            <th className='py-3 px-4'>Email</th>
                            <th className='py-3 px-4'>Role</th>
                            <th className='py-3 px-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className='border-b hover:bg-gray-50'>
                                <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                    {user.name}
                                </td>
                                <td className='p-4'>
                                    {user.email}
                                </td>
                                <td className='p-4'>
                                    <select
                                        value={user.role}
                                        className='p-2 border rounded'
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        disabled={loading}>
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className='p-4'>
                                    <button
                                        className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                                        onClick={() => handleDeleteUser(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default UserManagement
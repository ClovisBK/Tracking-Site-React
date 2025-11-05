import React, { useState } from 'react';
import api from '../api';
import './Styles/loan.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

     const navigate = useNavigate();

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);
        try{
            const response = await api.post('/Auth/login', formData);
            console.log("Full reponse:", response);
            const token = response.data.accessToken;

            console.log('token generated', token);
            if(token){
                localStorage.setItem('authToken', token);
                setMessage('Login successful!');
               
                navigate('/books');
            }else{
                setError("Login Succeeded but no token was returned.");
            }

        }catch(err){
            if(err.response?.data?.errors){
                const messages = Object.values(err.response.data.errors).flat().join(' ');
                setError(`${messages}`);
            }else if(err.response?.data?.message)
                setError(`${err.response.data.message}`);
            else
                setError('Login failed. Please check your credentials');
            console.error(err);
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className='max-w-md mx-auto  p-6  rounded-lg shadow-md form-container'>
        <h2 className='text-2xl font-bold mb-4 text-center text-blue-700'>Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <input
                type= "email"
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounder focus:outline-none focus:ring-blue-500'
                required
            />
            <input
                type= "password"
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounder focus:outline-none focus:ring-blue-500'
                required
            />
            <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition'>
                Login
            </button>
        </form>
            {error && <p className='mt-4 text-center text-red-600'>{error}</p>}
            {message && <p className='mt-4 text-center text-green-600'>{message}</p>}
            {loading && 
            <div className='spinner-container'>
                    <div className="spinner"></div>
            </div>
            }
        
    </div>
  )
}

export default LoginForm

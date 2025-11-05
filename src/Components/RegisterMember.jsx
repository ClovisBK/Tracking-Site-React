import React, {useState} from 'react'
import api from '../api';
import { useNavigate } from 'react-router-dom';

const RegisterMember = () => {
const [formData, setFormData] = useState({

    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
});
const [message, setMessage] = useState('');
const [error, setError] = useState('');
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

    if(formData.password !== formData.confirmPassword){
        setError("Passwords don't match.");
        return;
    }

    const payload = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone
    };
    try{
        const response = await api.post('/Auth/register/member', payload);
        // setMessage('Registration successful! You can now log in.');
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: ''
        });
        navigate('/books');
    }catch(err){
        if(err.response?.data?.errors){
                const messages = Object.values(err.response.data.errors).flat().join(' ');
                setError(`${messages}`);
            }else if(err.response?.data?.message)
                setError(`${err.response.data.message}`);
            else
                setError('Login failed. Please check your credentials');
        
        console.error(error);
    }finally{
        setLoading(false);
    }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className='text-2xl font-bold mb-4 text-center'>Patron Registration</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <input type="text" name='fullName'value={formData.fullName} placeholder='Full Name' onChange={handleChange} 
                className='w-full px-4 py-2 border rounder focus:outline-none focus:ring-2 focus:ring-blue-500' required />
            <input type="email" name='email' value={formData.email} placeholder='Email' onChange={handleChange}
                 className='w-full px-4 py-2 border rounring-2 focuder focus:outline-none focus:s:ring-blue-500' required />
            <input type="password" name='password' value={formData.password} placeholder='Password' onChange={handleChange} 
                className='w-full px-4 py-2 border rounder focus:outline-none focus:ring-2 focus:ring-blue-500' required />
            <input type="password" name='confirmPassword' value={formData.confirmPassword} placeholder='Confirm Password' onChange={handleChange}
                 className='w-full px-4 py-2 border rounder focus:outline-none focus:ring-2 focus:ring-blue-500' required />
            <input type="number" name='phone' value={formData.phone} placeholder='Phone Number' onChange={handleChange}
                 className='w-full px-4 py-2 border rounder focus:outline-none focus:ring-2 focus:ring-blue-500' required />
            <button type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
                Register
            </button>
        </form>
        {loading && 
            <div className='spinner-container'>
                <div className='spinner'></div>
            </div>}
        {error && <p className='mt-4 text-center text-red-600'>{error}</p>}
        {message && <p className='mt-4 text-center text-green-600'>{message}</p>}
    </div>
  );
};

export default RegisterMember

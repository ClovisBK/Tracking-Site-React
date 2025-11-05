import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import api from '../api';

const ReserveBook = () => {
    const [books, setBooks] = useState([]);
    const [formData, setFormData] = useState({bookId: ''});
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchBooks = async ()  => {
        try{
            const response = await api.get('/books');
            setBooks(response.data);
        }catch(error){
            console.error("Error fetching books", error);
        }
    };
    fetchBooks();
}, []);
const handleSelectChange = (selectOption) => {
    setFormData({bookId: selectOption?.value || ''});
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    const token = localStorage.getItem('authToken');
    try{
        const response = await api.post('/reservation', formData);
        setMessage("Your reservation has been made successfully");
        setFormData({bookId: ''});
    }catch(error){
        console.error('Error making a reservation: ', error);
        setError('Reservation failed');
    }finally{
        setLoading(false);
    }
};
const selectOptions = books.map(item => ({
    value: item.id,
    label: `${item.title}`
}));
  return (
    <>
        <div className='max-w-md mx-auto mt-10 p-6 rounded-lg h-fit loan-form'>
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Reserve a Book</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
            <div className="mb-2">
            <label htmlFor='bookCopyId' className='block text-sm font-medium text-gray-700 mb-1'>Select Book</label>
            <Select
                className='w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="number"
                name='book'
                onChange={handleSelectChange}
                placeholder="Search and select a book"
                isClearable
                required
            
                options={selectOptions}
                value={selectOptions.find(opt => opt.value === formData.bookId)}
            />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Reservation</button>
        </form>
             {loading && (
                <div className='spinner-container'>
                    <div className='spinner'></div>    
                </div>
            )}
       
        {message && <p className='text-green-800'>{message}</p>}
        {error && <p className='text-red-600'>{error}</p>}

        </div>

    </>
  )
}

export default ReserveBook

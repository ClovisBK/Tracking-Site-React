import React, { useEffect, useState } from 'react';
import api from '../api';
import Select from 'react-select'
import './Styles/loan.css'

const AddLoanForm = () => {
  const [bookCopies, setBookCopies] = useState([]);
  const [formData, setFormData] = useState({bookCopyId: ''});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    const fetchBookCopies = async () =>{
      try{
        const response = await api.get('/bookCopy/availableCopies');
        setBookCopies(response.data);
      }catch(error){
        console.error('Error fetching book copies', error);
      }
    };
    fetchBookCopies();
  }, []);

   const handleSelectChange = (selectOption) => {
    setFormData({bookCopyId: selectOption?.value || ''})
   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    const token = localStorage.getItem('authToken');
    try {
     const response = await api.post('/loan', formData);

      setMessage('Loan added successfully!');
      setFormData({bookCopyId: ''});
    } catch (error) {
      console.error('Error adding loan:', error);
      setError('Failed to add loan');

    }finally{
      setLoading(false);
    }
  };
  const selectOptions = bookCopies.map(copy => ({
    value: copy.id,
    label: `${copy.book?.title} (${copy.copyNumber})`
  }))

  return (
    <div className='max-w-md mx-auto mt-10 p-6 rounded-lg h-fit loan-form'>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Borrow a Book</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className="mb-2">
          <label htmlFor='bookCopyId' className='block text-sm font-medium text-gray-700 mb-1'>Select Book Copy</label>
          <Select
            className='w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="number"
            name='bookCopyId'
            onChange={handleSelectChange}
            placeholder="Search and select a copy"
            isClearable
            required
          
            options={selectOptions}
            value={selectOptions.find(opt => opt.value === formData.bookCopyId)}
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Loan</button>
      </form>
      {loading && 
        <div className='spinner-container'>
            <div className='spinner'></div>
        </div>
        }
      {message && <p className='text-green-800'>{message}</p>}
      {error && <p className='text-red-600'>{error}</p>}

    </div>
  );
};

export default AddLoanForm;

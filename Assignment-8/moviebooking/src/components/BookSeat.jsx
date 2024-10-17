import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';``

export const BookSeat = () => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/Confirm', { state: { ...formData, id: Math.floor(Math.random() * 10000) } });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  return (
    <div className='w-full h-[90dvh] flex justify-center items-center'>
<div className='flex justify-center items-center gap-5'>
<div className='overflow-hidden w-[400px] h-[600px]'>
        <img src="https://preview.redd.it/what-are-the-most-popular-movies-you-havent-seen-yet-v0-r5ug5bq3dxva1.jpg?width=1080&crop=smart&auto=webp&s=7e16e31fe50d83b19182851315007b636faf4a04" className='scale-100' alt="" />
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg w-[600px] mx-auto bg-white shadow-lg shadow-blue-900 p-6 rounded">
    <div className="mb-4">
      <label className="block text-gray-700">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Mobile:</label>
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Submit
    </button>
  </form>
</div>
    </div>
  )
}

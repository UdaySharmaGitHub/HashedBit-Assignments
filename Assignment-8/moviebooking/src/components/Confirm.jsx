import { useLocation } from 'react-router-dom';

export const Confirm = () => {
    const location = useLocation();
    const { id, name, email, mobile } = location.state || {};
  
  
    if (!id || !name || !email || !mobile) {
      return (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">Invalid Booking</h2>
          <p>Please fill out the form before accessing this page.</p>
        </div>
      );
    }
    
    return (
      <div className='w-full h-[85dvh] flex justify-center items-center'>
        <div className="max-w-lg mx-auto bg-white shadow-lg shadow-blue-900 p-10  rounded mt-6 w-[50dvw] h-[60dvh] text-center">
        <h2 className="text-3xl font-bold mb-10 mt-20">Seat Booked Successfully!</h2>
        <p className="mb-2 text-xl text-left">
          Booking ID: <span className="font-bold">{id}</span>
        </p>
        <p className="mb-2 text-3xl text-left">Email: {email}</p>
        <p className="mb-2 text-3xl text-left">Mobile: {mobile}</p>
        <p className="mb-2 text-3xl text-left">Name: {name}</p>
      </div>
      </div>
  )
}

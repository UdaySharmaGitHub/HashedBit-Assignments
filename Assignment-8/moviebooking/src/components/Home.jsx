import { Link } from 'react-router-dom';

const moviesList = [
  { id: 1, title: 'Inception', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'The Dark Knight', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Interstellar', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Dune', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Avatar', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Titanic', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'The Matrix', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Joker', image: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Gladiator', image: 'https://via.placeholder.com/150' },
  { id: 10, title: 'Avengers', image: 'https://via.placeholder.com/150' },
  { id: 11, title: 'Spider-Man', image: 'https://via.placeholder.com/150' },
  { id: 12, title: 'Shutter Island', image: 'https://via.placeholder.com/150' },
  { id: 13, title: 'Whiplash', image: 'https://via.placeholder.com/150' },
  { id: 14, title: 'Parasite', image: 'https://via.placeholder.com/150' },
  { id: 15, title: 'Ford v Ferrari', image: 'https://via.placeholder.com/150' },
  { id: 16, title: 'The Godfather', image: 'https://via.placeholder.com/150' },
];

export const Home = ()=> {
  return (
    <div className="p-10 grid grid-cols-4 gap-14">
      {moviesList.map((movie) => (
        /* From Uiverse.io by Yaya12085 */ 
<div key={movie.id} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-[#00000070]">
  <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={movie.image} className='w-full h-full center' alt="" />
  </div>
  <div className="p-4">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {movie.title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
    </p>
  </div>
  <div className="pt-0 p-2 mx-auto">
   <Link to={`/movies/${movie.id}`}>
   <button data-ripple-light="true" type="button" className=" select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
    </Link>
  </div>
</div>
        
      ))}
    </div>
  );
}

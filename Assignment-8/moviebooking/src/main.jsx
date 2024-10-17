import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home} from './components/Home.jsx';
import {MoviesDetails} from './components/MoviesDetails.jsx';
import {Confirm} from './components/Confirm.jsx';
import { BookSeat } from './components/BookSeat.jsx';
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
        <Route path="" element={<Home />} />
        <Route path="movies/:id" element={<MoviesDetails />} />
        <Route path="bookseat/:id" element={<BookSeat />} />
        <Route path="confirm" element={<Confirm />} />
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

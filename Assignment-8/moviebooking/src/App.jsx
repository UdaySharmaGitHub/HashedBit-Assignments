import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';

function App() {
  return (
    <>
    <Navbar/>
   <section style={{scrollBehavior:'smooth'}}>
   <Outlet/>
   </section>
    </>
  );
}

export default App;

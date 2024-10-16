import './App.css'
import './components/Buttons.min.css'
import { useEffect,useState } from 'react'
import { IplTeams } from './components/IplTeams';
import { Loader } from './components/Loader';
function App() {
  const [iplteams, setIplTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchData = ()=>{
  fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    setLoading(false)
    data.sort((a, b) => a.NRR - b.NRR);
    setIplTeams(data);
  }).catch((error)=>{
    setError(error);
  })
}



// if (loading) return <div className="text-center">Loading...</div>;
// if (error) return <div className="text-danger">{error}</div>;

return (
   <div className='w-[100dvw] h-[100dvh] flex justify-center items-center'>
    <div className='flex justify-center items-center gap-10 flex-col'>
      <div className='text-center'>
      <h1 className='text-3xl font-bold mb-5'>IPL POINTS LIST</h1>
      <button onClick={fetchData}>
  <span className="button_top"> Button </span>
</button>
<button onClick={()=>{setIplTeams([]); fetchData()}}>
  <span className="button_top ml-4"> fetch again </span>
</button>
      </div>
      {/* <IplTeams teams={iplteams}/> */}
      { (!loading)?(!error)?<IplTeams teams={iplteams}/>:<Error/>:<Loader/> }
    </div>
   </div>
);
}

export default App

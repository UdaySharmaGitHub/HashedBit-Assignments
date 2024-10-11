import './App.css'
import { Calculator } from './components/Calculator'
function App() {

  return (
    <div className='flex justify-center items-center h-screen bg-[#141414]'>
      <div className='flex flex-col gap-4 text-white'>
        <Calculator />
      </div>
    </div>
  )
}

export default App

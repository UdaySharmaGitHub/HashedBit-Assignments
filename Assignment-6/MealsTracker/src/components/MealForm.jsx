import { useMealContext } from '../context/MealContext'
import { useState } from 'react'

const MealForm = () => {
    const [meal, setMeal] = useState('')
    const {addMeal} = useMealContext();
    const adding =(e)=>{
        e.preventDefault();
        if(!meal) return ;
        addMeal({
          meal,completed:false
        })
        setMeal('');
    }
  return (
        <form action="" onSubmit={adding} className='flex bg-white/20 rounded-xl overflow-hidden shadow-md'>
            <input type="text"
              value={meal}
              placeholder='Define Your meal'
              onChange={e=>setMeal(e.target.value)}
              className="w-[400px] border text-white text-xl border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-transparent py-1.5"
             />
             <button className='bg-red-500 text-black px-6 font-bold text-xl'>Add</button>
        </form>
  )
}

export {MealForm};
import { useState ,useEffect } from 'react'
import './App.css'
import {MealForm} from './components/MealForm'
import { MealContextProvider } from './context/MealContext'
import { MealItem } from './components/MealItem';

function App() {
  const [meals,setMeals] = useState([]);

//  Basic Context 
  //  add Todo
  const addMeal = (meal)=>{
    setMeals((prev)=>[{id:Date.now(),...meal},...prev])
}

//  Update Todos
const updateMeal = (id,meal)=>{
  setMeals((prev)=> prev.map((prevMeal)=>
  (prevMeal.id === id ? meal: prevMeal )
 ))
}

// delete Todo
const deleteMeal = (id)=>{
  setMeals((prev) => prev.filter((meal) => meal.id!==id ))
}

//  Toggle Todo
const toggleComplete = (id)=>{
  setMeals((prev)=> prev.map((prevMeal)=> 
    prevMeal.id===id? {...prevMeal,completed:!prevMeal.completed}:prevMeal ))
}

//local Storage => because the Loacl Storage stores into string
useEffect(() => {
const meals=   JSON.parse(localStorage.getItem("meals"));
if(meals && meals.length > 0){
  setMeals(meals)
}
}, [])

useEffect(()=>{
  //  convert the  JSON into String 
  localStorage.setItem("meals",JSON.stringify(meals));
},[meals])


  return (
    <MealContextProvider value={{meals,addMeal,updateMeal,deleteMeal,toggleComplete}}>
    <div className='w-full h-[100dvh] grid place-items-center bg-[#333333]'>
      <div className=''>
      <h2 className=' pb-4 text-center text-4xl font-bold text-blue-400'><strong className='text-red-400'>Meals</strong> Tracker</h2>
      <div className='container bg-black p-[25px] min-w-[400px] w-[40dvw] grid place-items-center gap-4 rounded-2xl shadow-black shadow-md'>
        <MealForm/>
        <div className=' min-w-[300px] w-[90%] order-1 md:order-2'>
          {meals.map((meal)=>(
            <div key={meal.id}>
              <MealItem meal={meal}/>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </MealContextProvider>
  )
}

export default App

import { useState } from "react";
import { useMealContext } from "../context/MealContext";
export const MealItem = ({ meal }) => {
  const { updateMeal, deleteMeal, toggleComplete } = useMealContext();
  const [mealEditable, setMealEditable] = useState(false);
  const [mealmsg, setMealMsg] = useState(meal.meal);

  const toggleCompleted = () => {
    console.log(meal.id);
    toggleComplete(meal.id);
  };

  const editMeal =()=>{
    updateMeal(meal.id,{...meal,meal:mealmsg})
    setMealEditable(false);

  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 bg-transparent text-white text-lg font-semibold ${
        meal.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7] mt-4"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={meal.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        value={mealmsg}
        className={`border outline-none w-full rounded-lg ${
          mealEditable ? "border-black/10 px-2 bg-[#c6e9a7] text-black" : "bg-transparent border-transparent"
        } ${meal.completed ? "line-through" : ""} `}
        onChange={(e) => setMealMsg(e.target.value)}
        readOnly={!mealEditable}
      />
      {/* Edit, Save Button */}
      <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                  if(meal.completed) return;
                  if(mealEditable){
                    editMeal();
                  }
                  else{
                    setMealEditable((prev)=>!prev);
                  }
                }}
                >
                  {mealEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
              onClick={()=> deleteMeal(meal.id)}
            >
                ❌
            </button>
    </div>
  );
};

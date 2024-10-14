import {createContext,useContext} from "react"

export const MealContext = createContext({
    meals:[
        {
            id:1,
            name:"Breakfast",
            completed:false
        },
    ],
    addMeal:(meal)=>{},
    updateMeal:(id,meal)=>{},
    deleteMeal:(id)=>{},
    toggleComplete:(id)=>{},
})

export const useMealContext = ()=>{
    return useContext(MealContext);
}

export const MealContextProvider = MealContext.Provider;
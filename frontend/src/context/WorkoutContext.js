import { Children, createContext, useReducer } from "react";

export const WorkoutContext =createContext()

export const workoutsReducer =(State,action)=>{
    
}

export  const WorkoutContextProvider =({children})=>{
    const [state,dispatch]= useReducer(workoutsReducer,{
        workouts: null
    })
    return (
        <WorkoutContext.Provider value={{}}>
            {children}
        </WorkoutContext.Provider>
    )
}
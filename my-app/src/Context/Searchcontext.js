import { createContext, useState } from "react";
export const Mainsearch = createContext(null)

export function Searchcon({children}){

    const [searchans, setsearchans] = useState('')

    return(
        <Mainsearch.Provider value={{searchans,setsearchans}}>
            {children}
        </Mainsearch.Provider>
    )
}
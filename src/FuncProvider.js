import React, { useContext, useState } from 'react'


// Create Context
export const StateContext = React.createContext();


// Use Context
export function useStateContext(){
    return useContext(StateContext);
}



// Create Provider
export function GlobalStateProvider({children}){

    // If you want to also be able to change it 
    
    // const handleChange = (e) =>{
    //     setNewState({...newState, 
    //         state: {
    //             book:e.target.value
    //         }
    //     });
    // }

    // create inital value with hooks
    const [newState, setNewState] = useState({
        state:{
            book:"Influence"
        },
        // handleChange: handleChange
    })

    // Pass value to it's children
    return (
        <StateContext.Provider value={newState}>
            {children}
        </StateContext.Provider>
    )

}
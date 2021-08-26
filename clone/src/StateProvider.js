import React, { createContext, useContext, useReducer } from "react"

//Making the context i.e, data layer in which we put add to cart item
export const StateContext = createContext()

//passing elements in which we can use StateContext
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//useContext() ,  we call this in the component in which we want to use
export const useStateValue = ()=> useContext(StateContext);
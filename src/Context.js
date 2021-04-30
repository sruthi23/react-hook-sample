import React, { useState, createContext } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'

export const AppContext = createContext()

export const AppContextProvider = props => {
    const [value, setValue] = useState(reactLocalStorage.getObject('data'))
    const saveData = newData => {
        reactLocalStorage.setObject('data', { ...value, ...newData })
        
    }

    return (
        <AppContext.Provider value={{ value, saveData }}>
            {props.children}
        </AppContext.Provider>
    )
}


import Home1 from './Home1'
import React, { useState, createContext } from 'react'
const Home4 = (props) => {
    const [value, setValue] = useState("")
    const saveData = newData => {
        setValue('data', { ...value, ...newData })
        console.log("values is",saveData);
    }
    return (
        <div><span
        className={value.completed ? "value-completed" : undefined}
        onClick={() =>  saveData(value.id)}>
        {value.name}
      </span> 

            <p>hello niya{value.id} </p>
        </div>
    )
}

export default Home4

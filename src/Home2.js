import React, { useContext } from 'react'
import { AppContext } from './Context'
import Home1 from './Home1'
const Home2 = props => {
    const { value } = useContext(AppContext)
    const { key } = props.match.params
    const userData = value[key]
    console.log("data is",userData);
    if (!userData) {
        return (
            <div>
                <p>Error: User not found!</p>
            </div>
        )
    }

    return (
        <div>
            <p>
            <Home1/>
                This page is for <b>{userData.name}</b>
            </p>
            
        </div>
      
    )
}

export default Home2

//import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import SignUp from './SignUp'
import Homeone from './Homeone'
import 'tailwindcss/tailwind.css'
import './index.css'
import Message from './Message'
import Test2 from './Test2'
import SampleForm from './SampleForm'
import Sample from './sample'
import MyForm from './MyForm'
import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
function App() {
    const [myFieldValue, setmyFieldValue] = React.useState('')
    return (
        <div className="container mx-auto">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SampleForm />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>

                    <Route path="/Homeone">
                        <Homeone />
                    </Route>

                    <Route path="/Message">
                        <Message />
                    </Route>

                    <Route path="/Test2">
                        <Test2 />
                    </Route>

                    <Route path="/MyForm">
                        <MyForm />
                    </Route>

                    <Route path="/Sample">
                        <Sample />
                    </Route>
                    <Route path="/Home4">
                        <Home4 />
                    </Route>
                    <Route path="/Home1">
                        <Home1 />
                    </Route>
                    <Route exact path="/user/:key" component={Home2}></Route>

                    <Route path="/Home3/:key" component={Home3}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

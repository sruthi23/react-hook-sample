import React from 'react'

import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className="w-44">
      <h2>SignUp</h2>

      <FormControl label={() => 'hello'} caption={() => 'descrip'}>
        <Input />
      </FormControl>

    
     
      </div>
    
  )
}

export default SignUp

import React from 'react'
import { FormControl } from 'baseui/form-control';
import { Textarea } from 'baseui/textarea';
import { Button } from "baseui/button";
//import {AppNavBar, setItemActive} from 'baseui/app-nav-bar';

function Message(props) {
    const [value, setValue] = React.useState('');
    return (

        
        <div className="max-w-prose mx-auto  p-20 bg-gray-100  mt-10  " >
            <div   className="w-full">
     
            <p className="text-lg ... text-purple-700 text-opacity-100 " >Send Secret Message to {props.value} </p>
                <FormControl label="Write Secret meessage" >
                    <Textarea className="text-2xl text-blue-700 leading-tight"
                        placeholder="Write Secret meessage"
                        id="textarea-id"
                        value={value}
                        onChange={event => setValue(event.currentTarget.value)} />

                </FormControl>
                </div>

                <div > 
                <Button  className=" w-full bg-gradient-to-r from-indigo-900 to-indigo-900  "  onClick={() => alert("click")} >Submit</Button>
                </div>
                
            
        </div>
        
    )
}

export default Message
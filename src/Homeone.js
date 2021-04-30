import React from 'react'
import { useForm } from "react-hook-form";
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from "baseui/button";
import "tailwindcss/tailwind.css";
import './index.css';



function Homeone() {
  const [value, setValue] = React.useState('');
  // const [itemList,updateItemList] = React.useState([]);

  //console.log(value);

  const { handleSubmit } = useForm();

  const onhandleSubmit = (e) => {
  //event.preventdefault();
  console.log(value);
  // setValue(value);
}
// const addItemsToList = () =>{
//updateItemList([...itemList,{ value:value,key : Date.now()}]);
// setValue("");
// console.log(value);
//}
//const {signup,handleSubmit} = useForm();
//function showname(){
// alert("event.currentTarget.value");
//}
//document.getElementById('roots').innerHTML = value

return (
  <div>
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10  rounded-sm shadow-xl" >
      <div className="w-full">
        <p className="text-lg ... text-purple-700 text-opacity-100 " >Secret Message Book </p>


        <form onSubmit={handleSubmit(onhandleSubmit)}>
          <div className="text-2xl text-blue-700 leading-tight">



            <label>Your Name :</label>
            <Input id="input-id" placeholder="Full Name" value={value}
              onChange={(event) =>
                setValue(event.target.value)
             } /> 
           
          </div>
          <textarea>
          </textarea>

          <Button className="  w-full bg-red-to-r from-indigo-800 to-indigo-800"
          onClick={()=>setValue(value)}  >Sign Up</Button>

        </form>

      </div>



    </div>
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10  rounded-sm shadow-xl" >

      <p>{value}</p>



    </div>
  </div>
)

}

export default Homeone
//onClick={addItemsToList}


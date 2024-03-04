import { useState } from "react"
// import CustomerView from "./CustomerView";

import {useDispatch } from "react-redux";
import { addCustomer } from "../slice/CustomerSlice";


const CustomerAdd = () => {

    let [input,setInput]=useState("");
    const dispatch=useDispatch();

 function addCustomerData()
    {
        if(input)
        {
            dispatch(addCustomer(input))
            setInput("");
        }
    }

  return  <>
     <div>
        <h1>Add customer</h1>
        <input type="text"  value={input}onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addCustomerData}>Add</button>
    </div>
    {/* <CustomerView customers={customers}/> */}
  </>
}

export default CustomerAdd

 // let[customers,addCustomers]=useState([])
    
    // let AddInput=()=>
    // {
    //    if(input)
    //    {
    //     addCustomers((preVal)=>[...preVal,input])
    //     setInput("")
    //    }
    // }
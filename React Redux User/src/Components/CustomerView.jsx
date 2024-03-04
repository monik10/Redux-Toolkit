import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../slice/CustomerSlice";

/* eslint-disable react/prop-types */



const CustomerView = () => {
    const dispatch=useDispatch();
   const customers=useSelector((state)=>state.customers)
   function deleteHandler(index)
   {
    dispatch( deleteCustomer(index))
   }
  return (
    <div>
    <h1>Customer View</h1>
    <ul>
        {
            customers.map((customer,index)=>{
                return <>
                    <li>{customer} <button onClick={()=>deleteHandler(index)}>delete</button></li>
                </>
            })
        }
    </ul>
    </div>
  )
}

export default CustomerView
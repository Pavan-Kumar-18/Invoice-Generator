import React from 'react'
import { useState  } from 'react'
import './index.css';
import { useContext } from 'react';
import { myContext} from './App';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function Invoice() {
    const {Currency , Tax} = useContext(myContext)
    const [data , setData] = useState({
   invoicenu: "",
   cname :"",
   pname :"",
   pquantity :"",
   pprice :"",

    })
   const {invoicenu,cname,pname,pquantity,pprice} = data

   const onChange = e=>{
    let Enterdata = e.target.value
    if(Enterdata){
        setData({...data,[e.target.name]: Enterdata})
    }
   }
  function submithandel(){
    const Imagedata = document.querySelector(".invoice")
    html2canvas(Imagedata).then(function(response){
        const Dataa = response.toDataURL("img/png")
        const Doc = new jsPDF ("p", "mm","a4")
        const Width = Doc.internal.pageSize.getWidth()
        const Height = Doc.internal.pageSize.getHeight()

        Doc.addImage(Dataa,"png",0,0,Width,Height)
        Doc.save()

    })
    .catch(function(error){
console.log(error)
    })
  }
  
  return (
    <div>
        <h3>Date : {new Date().getDay()}</h3>
    <center>
      <h1 className="text-3xl font-bold underline"> Invoice Bill </h1>
      <h3>Invoice Number : {<input  type='text' name='invoicenu' value={invoicenu} onChange={onChange} className='block w-30 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:invoice number focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>}</h3>
     <label>Customer Name</label>  <input type='text' value={cname} name='cname' onChange={onChange}   className='block w-60 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:invoice number focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
     <label>Product name</label>  <input type='text' value={pname} name='pname' onChange={onChange}  className='block w-60 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:invoice number focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
     <label>Quantity</label>  <input type='text' value={pquantity} name='pquantity' onChange={onChange}  className='block w-60 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:invoice number focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
     <label>Price </label>  <input type='text' value={pprice} name='pprice' onChange={onChange}  className='block w-60 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:invoice number focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
     {
        <div className='invoice'>
            <h3>Invoice Bill Number :{data.invoicenu} </h3>
            <h3>Customer Name : {data.cname} </h3>
            <h3>Product Name : {data.pname} </h3>
            <h3>Quantity : {data.pquantity} </h3>
            <h3>Price : {data.pprice} </h3>
            <h3>Currency : {Currency} </h3>
            <h3>Tax : {Math.floor(data.pprice * 0.18)} </h3>
            <button onClick={submithandel} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
  Download
</button>

        </div>
     }

    </center>
    </div>
  )
}

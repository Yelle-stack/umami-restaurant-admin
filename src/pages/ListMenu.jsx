import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'
import {MdDeleteForever} from 'react-icons/md'

const ListMenu = ({token}) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list', {headers: {token}})
      if(response.data.success){
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(()=> {
    fetchList()
  },[])
  return (
    <div>
      <p className='mb-2 font-bold text-2xl'>Menu List</p>
      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg font-semibold'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
         
         {list.map((item, index) => 
        <div 
        key={index} 
        className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg'>
          <img 
          className='w-12.5 h-auto'
          src={item.image} 
          alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.price} €</p>
          <MdDeleteForever className='ml-10 text-[28px] cursor-pointer text-red-700'/>

        </div>)}

      </div>
    </div>
  )
}

export default ListMenu

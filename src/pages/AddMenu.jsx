import React from 'react'
import upload_img from '../assets/upload_img.png'
import { useState } from 'react'

const AddMenu = ({token}) => {

  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("All")
  return (
    <div className='w-full max-w-4xl p-6 bg-white rounded-lg shadow'>
      <form className='flex flex-col items-start gap-1'>
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img className='w-32  cursor-pointer' 
              src={!image ? upload_img : URL.createObjectURL(image)} alt="" />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden/>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2 text-[22px]'>Product Name</p>
          <input 
          className='w-full max-w-125 p-4 border border-gray-300 rounded'
          value={name} 
          onChange={(e)=> setName(e.target.value)} 
          type="text" 
          placeholder='Enter product name' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2 text-[22px]'>Product Description</p>
          <input 
          className='w-full max-w-125 p-4 border border-gray-300 rounded'
          value={description} 
          onChange={(e)=> setDescription(e.target.value)} 
          type="text" 
          placeholder='Enter product description' required/>
        </div>

        <div className='flex flex-wrap gap-4 w-full'>
          <div className='min-w-50'>
            <p className='mb-2 text-[22px]'>Product Category</p>
            <select 
            className='w-full max-w-125 p-3 border border-gray-300 text-[16px] rounded'
            value={category} 
            onChange={(e)=> setCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="Spaghetti">Spaghetti</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Chicken">Chicken</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          <div>
            <p className='mb-2 text-[22px]'>Product Price</p>
            <input 
            className='w-full max-w-30 p-4 border border-gray-300 rounded'
            value={price} 
            onChange={(e)=> setPrice(e.target.value)} 
            type="number" 
            placeholder='40'/>
          </div>
        </div>
        <button 
        className='mt-6 px-20 py-3 bg-amber-500 rounded hover: opacity-90'
        type="submit">Add Menu</button>
      </form>
    </div>
  )
}

export default AddMenu

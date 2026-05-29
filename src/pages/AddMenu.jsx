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
    <div>
      <form>
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img className='w-32 h-32 object-cover rounded-lg border border-gray-300 cursor-pointer' 
              src={!image ? upload_img : URL.createObjectURL(image)} alt="" />
              <input type="file" id="image" hidden/>
            </label>
          </div>
        </div>

        <div>
          <p>Product Name</p>
          <input type="text" placeholder='Enter product name' required/>
        </div>

        <div>
          <p>Product Description</p>
          <input type="text" placeholder='Enter product description' required/>
        </div>

        <div>
          <div>
            <p>Product Category</p>
            <select>
              <option value="All"></option>
              <option value="Spaghetti"></option>
              <option value="Pizza"></option>
              <option value="Rice"></option>
              <option value="Noodles"></option>
              <option value="Chicken"></option>
              <option value="Drinks"></option>
            </select>
          </div>

          <div>
            <p>Product Price</p>
            <input type="number" placeholder='40'/>
          </div>
        </div>
        <button type="submit">Add Menu</button>
      </form>
    </div>
  )
}

export default AddMenu

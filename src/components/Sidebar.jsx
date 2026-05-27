import React from 'react'
// import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { IoIosLogOut, IoMdAddCircleOutline } from 'react-icons/io'
import { MdFormatListBulletedAdd, MdAddShoppingCart } from 'react-icons/md'
import { PiListBulletsFill } from 'react-icons/pi'

const Sidebar = ({setToken}) => {
  return (
    <div className='w-[22%] min-h-screen border-r-2 border-gray-200 bg-white'>
      <div className='mt-4 px-6'>
        <h2 className='text-[32px] font-bold'>Umami House</h2>
      </div>

      <div className='flex flex-col gap-4 pt-6'>

        <NavLink className="flex items-center gap-3 px-6">
          <IoMdAddCircleOutline />
          <p className='hidden md:block text-base'>Add Product</p>
        </NavLink>

        <NavLink>
          <MdFormatListBulletedAdd />
          <p className='hidden md:block text-base'>List Products</p>
        </NavLink>

        <NavLink>
          <PiListBulletsFill />
          <p className='hidden md:block text-base'>Reservations</p>
        </NavLink>

        <button>
          <IoIosLogOut />
          <p>Logout</p>
        </button>

      </div>
    </div>
  )
}

export default Sidebar
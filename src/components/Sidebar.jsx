import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosLogOut, IoMdAddCircleOutline } from 'react-icons/io'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import { PiListBulletsFill } from 'react-icons/pi'

const Sidebar = () => {
  return (
    <div>
      <div>
        <h2>Umami House</h2>
      </div>

      <div>

        <NavLink to="/add-menu">
          <IoMdAddCircleOutline />
          <p>Add Menu</p>
        </NavLink>

        <NavLink to="/menu-list">
          <MdFormatListBulletedAdd />
          <p>Menu List</p>
        </NavLink>

        <NavLink to="/reservations">
          <PiListBulletsFill />
          <p>Reservations</p>
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
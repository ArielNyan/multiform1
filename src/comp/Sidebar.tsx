import React from 'react'
import sidebar from '../assets/images/bg-sidebar-desktop.svg'
const Sidebar = () => {
  return (
    <div className="relative w-1/2">
      <img
        className=" object-cover rounded"
        src={sidebar}
        alt="sidebar"
      />
    </div>
  )
}

export default Sidebar

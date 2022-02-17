
import React from 'react'
import { Outlet } from 'react-router-dom'

const Menu1 = () => {
  return (
    <div >
      <h1>Menu1</h1>
      <hr/>
      <Outlet />
    </div>
  )
}

export default Menu1

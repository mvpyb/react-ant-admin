
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Menu1 = () => {
  useTitle('多级菜单')
  return (
    <div className={'app-container'}>
      <h1>Menu1</h1>
      <hr/>
      <Outlet />
    </div>
  )
}

export default Menu1

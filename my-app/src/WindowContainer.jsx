import React from 'react'
import { Outlet } from 'react-router-dom'

function WindowContainer({currentUser,setCurrentUser}) {
  return (
    <Outlet {...{currentUser,setCurrentUser}} />
  )
}

export default WindowContainer
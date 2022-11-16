import React from 'react'
import {Outlet} from 'react-router-dom'
export default function Teams() {
  return (
    <div>
        <h1>This is a teams page</h1>
        <Outlet/>
    </div>
  )
}

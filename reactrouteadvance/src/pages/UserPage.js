import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function UserPage() {
  return (
    <div>

        <h1>User</h1>
        
           <nav>
                
            <Link to="profile">Profile</Link>
            <Link to="account">Account</Link>
            </nav>
        
        <Outlet/>
    </div>
  )
}

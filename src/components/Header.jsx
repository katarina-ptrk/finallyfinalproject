import React from 'react'
import { Link } from 'react-router-dom'

function Header({user}) {
  return (
    <div>
        <div className="navbar">
  <div className="flex-1">
  <Link to={"/"}><h1 className='eventlogo'>Events</h1></Link>
  </div>
  <div>
   
    <div className="dropdown dropdown-end">
      {user ? <div>
        
      </div> : 
      <Link to={"/login"}><button class="button btn1">log in</button></Link>}
    </div>
  </div>
</div>
    </div>
  )
}

export default Header
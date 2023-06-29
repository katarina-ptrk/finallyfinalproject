import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Event() {
  return (
    <div className='eventpage'>
      <Link to={"/"}><h1 className="eventlogo">Events</h1></Link>
      <div className='divFlex'>
        <div className='photoFlex'>
          <img src="https://ik.imagekit.io/dwkgmo50n/eric-nopanen-3skLpaOBlMw-unsplash.jpg?updatedAt=1688050858990" alt="" />
        </div>
        <div className='textFlex'> <Link to={"/joinevent"}><button className='button'>join</button></Link></div>
      </div>
      <footer className='darkeeer'>
      <p>Copyright © 2023 - All right reserved
      <div className='right'>
      <Link to={"https://www.instagram.com/whoisrinochka/"} className='logoSocial'><ion-icon name="logo-instagram"></ion-icon></Link>
      <Link to={'https://www.instagram.com/whoisrinochka/'} className='logoSocial'><ion-icon name="logo-facebook"></ion-icon></Link>
      <Link to={"https://twitter.com/"} className='logoSocial'><ion-icon name="logo-twitter"></ion-icon></Link>
      </div></p>
  </footer>
    </div>
  )
}

export default Event
import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Homepage({user}) {
  return (
    
    <div className='homepagepage'>
      <div className='homepageImg'>
        <div className='brightness'>
      <Header user={user}/>
      <div className='flexYes'>
      <Link to={"/events"}><button class="button btn2">join</button></Link>
      <p>or</p>
      <Link to={"/create"}><button class="button btn3">create</button></Link>
      </div>
      </div>
      </div>
      <div className='wrap'>
        <p className='block'>Today:</p>
              <div className='wrapDetail'>
                <Link className='noneDec' to={"/event"}><img className='heightWenig' src="https://images.unsplash.com/photo-1546484488-2a1430996887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvb2wlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></Link>
              </div>
              <div className='wrapDetail'>
                <Link className='noneDec' to={"/event"}><img className='heightWenig' src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></Link>
              </div>
              <div className='wrapDetail'>
                <Link className='noneDec' to={"/event"}><img className='heightWenig' src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></Link>
              </div>
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

export default Homepage
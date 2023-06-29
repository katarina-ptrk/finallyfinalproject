import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function Create({user}) {
const navigate = useNavigate()
useEffect(() => {
  if (!user) {
    navigate('/login')
   }
})
  return (
    <div className='createpage'>
    <Link to={"/"}><h1 className='eventlogo'>Events</h1></Link>
    <p className='bigger'>Create your event! <sup className='bigger1'>^-^</sup></p>
    <div className='addAphoto'>
      <p className='centerCreate'>+</p>
    </div>
    <div className='fileContainer'>
    <input type="file" name="" className='hhhh' id="" />
    </div>
   
    <div className='inputsCreate'>
      <input className='inputCreate' type="text" placeholder='name' />
      <input className='inputCreate desc' type="text" placeholder='description' />
      <input className='inputCreate' type="text" placeholder='location' />
      <input className='inputCreate' type="date" name="" id="" placeholder='date'/>
      <p>from</p>
      <input className='inputCreate' type="time" name="" id="" placeholder='start' />
      <p>to</p>
      <input className='inputCreate' type="time" name="" id="" placeholder='end' />
      <input className='inputCreate' type="text" placeholder='min age' />
      <input className='inputCreate' type="text" placeholder='max seats'/>
      <input className='inputCreate' type="text" name="" id="" placeholder='price in euro' />
    </div>
    <div className='tupoFlex'>
    <Link to={"/preview"}><button className='button btn4'>continue</button></Link>
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

export default Create
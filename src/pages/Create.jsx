import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { createEvent } from '@testing-library/react';

function Create({user}) {
const navigate = useNavigate()
useEffect(() => {
  // if (!user) {
  //   navigate('/login')
  //  }


  function createEvent (e) {
    e.preventDefault()

      axios.post("https://backendjson-7cnw.onrender.com/events", {
        name: e.target.name.value,
        pic: e.target.pic.value,
        description: e.target.description.value,
        location: e.target.location.value,
        date: e.target.date.value,
        start: e.target.start.value,
        end: e.target.end.value,
        minAge: e.target.minAge.value,
        maxSeats: e.target.maxSeats.value,
        price: e.target.price.value

      }).then(i => navigate("/")).catch(i => console.log(i))
    

  }
})
  return (
    <div className='createpage'>
    <Link to={"/"}><h1 className='eventlogo'>Events</h1></Link>
    <p className='bigger'>Create your event! <sup className='bigger1'>^-^</sup></p>
    <form onSubmit={createEvent}>
    <div className='fileContainer'>
    <input type="file" name="" className='hhhh' id="" />
    </div>
    <div className='inputsCreate'>
    <input className='inputCreate' type="text" name='pic' placeholder='pic' />
      <input className='inputCreate' type="text" name='name' placeholder='name' />
      <input className='inputCreate desc' type="text" name='description' placeholder='description' />
      <input className='inputCreate' type="text" name='location' placeholder='location' />
      <input className='inputCreate' type="date" name="date" id="" placeholder='date'/>
      <p>from</p>
      <input className='inputCreate' type="time" name="start" id="" placeholder='start' />
      <p>to</p>
      <input className='inputCreate' type="time" name="end" id="" placeholder='end' />
      <input className='inputCreate' type="text" name='minAge' placeholder='min age' />
      <input className='inputCreate' type="text" name='maxSeats' placeholder='max seats'/>
      <input className='inputCreate' type="text" name="price" id="" placeholder='price in euro' />
    </div>
    <div className='tupoFlex'>
    <button className='button btn4'>continue</button>
    </div>
    </form>
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
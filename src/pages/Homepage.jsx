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
             
        <div className="flexWrap">
        <Link to={"/event"}><div className="card">
         <img className="heightWenig" src="https://ik.imagekit.io/dwkgmo50n/cassie-gallegos-i-VetqrMmNY-unsplash.jpg?updatedAt=1688037522093" alt="" />
         <div className="textCard">
        <h3>Pool party</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis ullam ratione esse, aliquid iure vitae assumenda.</p>
        <div className="amount">
        <p>0/34</p><ion-icon name="people-outline"></ion-icon>
        </div>
        </div>
      </div></Link>
      <Link to={"/event"}><div className="card">
         <img className="heightWenig" src="https://ik.imagekit.io/dwkgmo50n/kelsey-chance-tAH2cA_BL5g-unsplash.jpg?updatedAt=1688037520914" alt="" />
         <div className="textCard">
        <h3>Feel the wine</h3>
        <p>Lorem ipsum dolor sitkjadfius elit. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis ullam ratione esse, aliquid iure vitae assumenda.</p>
        <div className="amount">
        <p>0/25</p><ion-icon name="people-outline"></ion-icon>
        </div>
        </div>
      </div></Link>
      <Link to={"/event"}><div className="card">
         <img className="heightWenig" src="https://ik.imagekit.io/dwkgmo50n/mathilde-langevin-PiwXpD3-Hbs-unsplash.jpg?updatedAt=1688048111535" alt="" />
         <div className="textCard">
        <h3>Picnic</h3>
        <p>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. Lorem, ipsum. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis ullam ratione esse, aliquid iure vitae assumenda.</p>
        <div className="amount">
        <p>0/12</p><ion-icon name="people-outline"></ion-icon>
        </div>
        </div>
      </div></Link>
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
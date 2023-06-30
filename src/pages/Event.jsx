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
        <div className='textFlex'>
        <p className='bigggg'>Pool party</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio sed laboriosam expedita dignissimos, dolore aspernatur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt vitae repellat quae itaque natus animi, eius voluptatibus tempore, odio dolorum, ad explicabo id? Molestias, quidem! Incidunt a voluptatibus hic est totam voluptates. At aperiam distinctio nam. Voluptas ipsa error omnis hic vitae perferendis nesciunt dignissimos ipsum architecto amet eius nam perspiciatis dolores nemo culpa possimus beatae fugit, iure, modi neque dolore laboriosam? Nulla culpa repellendus officia? saepe</p> <Link to={"/"}><button className='button btn5'>join</button></Link></div>
      </div>
      <footer className='darkeeer footer'>
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
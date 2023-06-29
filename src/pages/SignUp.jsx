import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signuppage'>
    <Link to={"/"}><h1 className='eventlogo'>Events</h1></Link>
    <div className='inputs2'>
      <h2 className='logintoevents bottomLess'>Sign up <p>to Events</p></h2>
      <form>
        {/*  ШО ТУТ РОБИТИ????? */}
        <input className='signInput email2' type="email" name="email" id="" placeholder='email' />
        <input className='signInput password2' type="password" name="password" id="" placeholder='create password' />
        <input className='signInput password3' type="password" name="password" id="" placeholder='repeat password' />
        <br />
        <button className='submit btn-hover color-2' type="submit">sign up</button>
      </form>
      <Link to={"/login"} className='sent'>You already have an account?</Link>
    </div>
    
    <footer className='footer'>
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

export default SignUp
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const naviage = useNavigate()

  function submitHandler (e) {
    e.preventDefault()

    if (e.target.password.value != e.target.password2.value){
      alert("Password incorrect")
    }else {
      axios.post("https://backendjson-7cnw.onrender.com/users", {
        name: "user",
        email: e.target.email.value,
        phone: "",
        pic: "",
        age: "",
        city: "",
        password: e.target.password.value


      }).then(i => naviage("/")).catch(i => console.log(i))
    }

  }
  return (
    <div className='signuppage'>
    <Link to={"/"}><h1 className='eventlogo'>Events</h1></Link>
    <div className='inputs2'>
      <h2 className='logintoevents bottomLess'>Sign up <p>to Events</p></h2>
      <form onSubmit={submitHandler}>
        {/*  ШО ТУТ РОБИТИ????? */}
        <input className='signInput email2' type="email" name="email" id="" placeholder='email' />
        <input className='signInput password2' type="password" name="password" id="" placeholder='create password' />
        <input className='signInput password3' type="password" name="password2" id="" placeholder='repeat password' />
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
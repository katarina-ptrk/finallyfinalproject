import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function LogIn({user, setUser, users}) {
  
const navigate = useNavigate()
const log = (e) => {
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
  const person = users.find((i) => i.email == email)
  if (person) {
    if (person.password == password) {
      setUser(person);
      navigate('/')
      //  LOOK HERE!!!!!!!!!!!!!

    } else {
      console.log("wrong password");
      alert("wrong password")
    }
  } else {
    console.log("person not found");
  }
}
  return (
    <div className='loginpage'>
      <Link to={"/"}><h1 className='eventlogo'>Events</h1></Link>
      <div className='inputs'>
        <h2 className='logintoevents'>Log in <p>to Events</p></h2>
        <form onSubmit={log}>
          <input className='logInput email' type="email" name="email" id="" placeholder='email' />
          <input className='logInput password' type="password" name="password" id="" placeholder='password' />
          <br />
          <button className='submit btn-hover color-1' type="submit">submit</button>
          
        </form>
        <Link to={"/signup"} className='sent'>You don`t have an account?</Link>
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

export default LogIn
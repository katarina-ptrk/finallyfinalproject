import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    }
  } else {
    console.log("person not found");
  }
}
  return (
    <div className='loginpage'>
      <a href="/"><h1 className='eventlogo'>Events</h1></a>
      <div className='inputs'>
        <h2 className='logintoevents'>Log in <p>to Events</p></h2>
        <form onSubmit={log}>
          <input className='logInput email' type="email" name="email" id="" placeholder='email' />
          <input className='logInput password' type="password" name="password" id="" placeholder='password' />
          <br />
          <button className='submit btn-hover color-1' type="submit">log in</button>
        </form>
        <a className='sent' href="/signup">You don`t have an account?</a>
      </div>
      
      <footer>
      <p>Copyright © 2023 - All right reserved
      <div className='right'>
      <a className='logoSocial' href="https://www.instagram.com/whoisrinochka/"><ion-icon name="logo-instagram"></ion-icon></a>
      <a className='logoSocial' href="https://www.facebook.com/campaign/landing.php?campaign_id=1655873755&extra_1=s%7Cc%7C354212833677%7Ce%7Cfacebook%20%27%7C&placement=&creative=354212833677&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1655873755%26adgroupid%3D63461192557%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D9042432%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwv8qkBhAnEiwAkY-ahnSQooYUDKwDioYQvB9P4Q4M7rs2JXQN9jSIyFYvB3BAD9w2XraRqhoCCp8QAvD_BwE"><ion-icon name="logo-facebook"></ion-icon></a>
      <a className='logoSocial' href="https://twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a>
      </div></p>
      
  </footer>
  </div>
  )
}

export default LogIn
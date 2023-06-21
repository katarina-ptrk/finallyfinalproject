import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from "../data.json"

function LogIn({user, setUser}) {
  
const navigate = useNavigate()
const log = (e) => {
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
  const person = data.users.find((i) => i.email == email)
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
      <h1>Events</h1>
      <div>
        <h2>log in to Events</h2>
        <form onSubmit={log}>
          <input type="email" name="email" id="" />
          <input type="password" name="password" id="" />
          <button type="submit">submit</button>

        </form>
      </div>
      <a href="/signup">You don`t have an account?</a>
      <footer>
      <p>Copyright © 2023 - All right reserved ✧*｡٩(ˊᗜˋ*)و✧*｡</p>
      <ion-icon name="logo-instagram"></ion-icon>
  </footer>
  </div>
  )
}

export default LogIn
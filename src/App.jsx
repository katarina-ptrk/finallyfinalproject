import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import './App.css';
import Create from './pages/Create';
import Event from './pages/Event';
import Events from './pages/Events';
import JoinEvent from './pages/JoinEvent';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Preview from './pages/Preview';
import UserPage from './pages/UserPage';
import Footer from './components/Footer';
import Header from './components/Header';
import MyEvents from './pages/MyEvents';
import data from "./data.json"






function App() {
const [user, setUser] = useState()
const navigate = useNavigate()
const submitHandler = (e) => {
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
  const person = data.users.find((i) => i.email == email)
  if (person) {
    if (person.password == password) {
      setuser(person);
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
    <>
    <Header user={user}/>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/create" element={<Create />}>
        </Route>
        <Route path="/event" element={<Event />}>
        </Route>
        <Route path="/events" element={<Events />}>
        </Route>
        <Route path="/joinevent" element={<JoinEvent />}>
        </Route>
        <Route path="/login" element={<LogIn />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        <Route path="/preview" element={<Preview />}>
        </Route>
        <Route path="/userpage" element={<UserPage />}>
        </Route>
        <Route path="/myevents" element={<MyEvents />}>
        </Route>
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App

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
import Header from './components/Header';
import MyEvents from './pages/MyEvents';
import data from "./data.json"


function App() {
  const [user, setUser] = useState()
  return (
    <>
    
      <Routes>
        <Route path="/" element={[<Header user={user}/>, <Homepage />]}>
        </Route>
        <Route path="/create" element={[<Header user={user}/>, <Create />]}>
        </Route>
        <Route path="/event" element={[<Header user={user}/>,<Event />]}>
        </Route>
        <Route path="/events" element={[<Header user={user}/>,<Events />]}>
        </Route>
        <Route path="/joinevent" element={[<Header user={user}/>,<JoinEvent />]}>
        </Route>
        <Route path="/login" element={<LogIn user={user} setUser={setUser} />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        <Route path="/preview" element={[<Header user={user}/>,<Preview />]}>
        </Route>
        <Route path="/userpage" element={[<Header user={user}/>,<UserPage />]}>
        </Route>
        <Route path="/myevents" element={[<Header user={user}/>,<MyEvents />]}>
        </Route>
      </Routes>
    
    </>
  )
}

export default App

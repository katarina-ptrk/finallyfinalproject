import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Create from "./pages/Create";
import Event from "./pages/Event";
import Events from "./pages/Events";
import JoinEvent from "./pages/JoinEvent";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Preview from "./pages/Preview";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import MyEvents from "./pages/MyEvents";
import data from "./data.json";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  useEffect(() => {
    // API CODE GOES HERE
    axios("https://backendjson-7cnw.onrender.com/users")
      .then((i) => setUsers(i.data))
      .catch((i) => console.log(i));
  }, []);
  return (
    <>

      <Routes>
        <Route path="/" element={<Homepage user={user} />}></Route>
        <Route path="/create" element={ <Create user={user} />}></Route>
        <Route path="/event" element={ <Event />}></Route>
        <Route
          path="/events"
          element={ <Events />}
        ></Route>
        <Route
          path="/joinevent"
          element={ <JoinEvent />}
        ></Route>
        <Route
          path="/login"
          element={<LogIn users={users} user={user} setUser={setUser} />}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/preview"
          element={ <Preview />}
        ></Route>
        <Route
          path="/userpage"
          element={ <UserPage />}
        ></Route>
        <Route
          path="/myevents"
          element={ <MyEvents />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

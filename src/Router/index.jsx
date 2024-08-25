import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Project from "../pages/Project";
import { useEffect, useState } from "react";

const Router = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, [loggedIn]); 
  return (
  <Routing>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/my-projects" element={<Project loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
      </Routes>
    </Routing>
  );
}

export default Router;

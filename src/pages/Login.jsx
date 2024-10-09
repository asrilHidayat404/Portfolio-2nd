/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Login = ({setLoggedIn}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const navigate = useNavigate()
  
  useEffect(()=> {
    localStorage.getItem("loggedIn") ? navigate("/my-projects") : navigate("/log-in")
  },[])
  const handleLogin = async (e) => {

    e.preventDefault();
    const datas = {
      username,
      password
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/user-log-in`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(datas)
      });

      // Menunggu respon JSON dari server
      const data = await response.json();
      console.log(data)

      if (data.status) {
          setLoggedIn(true)
          localStorage.setItem("loggedIn", "true")
          navigate("/my-projects")
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-xl font-semibold text-slate-950">Let's Travel Deeper</p>
      <form className="flex flex-col lg:w-1/3 gap-5">
        <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
            className="py-1 px-2 border border-slate-600 rounded-sm focus:outline-blue-400"
            placeholder="Username atau email .."
            />
        </div>
        <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            className="py-1 px-2 border border-slate-600 rounded-sm focus:outline-blue-400"
            placeholder="Password .."
            />
        </div>
        <input 
          type="submit" 
          className="bg-green-600 hover:bg-green-800 cursor-pointer py-2 font-bold text-slate-300" 
          value="LOGIN" 
          onClick={handleLogin}
        />
        <br />
        <br />
        <center>
          <div className="block">
            <span>Don't have an account? </span> 
            <Link to="/sign-in" className="underline text-blue-400">Let's register</Link>
          </div>
          <Link to="/" className="underline">Back to Home</Link>
        </center>
      </form>
    </div>
  );
}

export default Login;


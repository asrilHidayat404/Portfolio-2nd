import { Navigate } from "react-router-dom"
import Header from "../components/Header"
import HeroProject from "../components/projectComponents/HeroProject"
import Main from "../components/projectComponents/Main"

const Project = ({loggedIn, setLoggedIn}) => {

    if (!loggedIn) {
        return <Navigate to="/log-in" />
    }
    const handleLogOut = () => {
        localStorage.removeItem("loggedIn")
        setLoggedIn(false)
    }
    return (
        <div className="w-full relative">
            <HeroProject />
            <Main handleLogOut={handleLogOut}/>
        </div>
    )
}

export default Project
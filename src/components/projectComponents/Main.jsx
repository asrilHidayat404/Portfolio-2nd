import { Link } from "react-router-dom"
import ProjectLists from "./ProjectLists"
import Footer from "../Footer"

const Main = ({handleLogOut}) => {
  return (
    <div className="mt-[100px] w-full">
        <h1 className="text-center text-3xl font-bold ">Here's Some Projects I've Developed</h1>
        <div className="w-full p-10 flex justify-evenly flex-wrap gap-10">
            <ProjectLists />
            <ProjectLists />
            <ProjectLists />
            <ProjectLists />
            <ProjectLists />
            <ProjectLists />
            <ProjectLists />
        </div>
        <Link 
            to="/"
            className="cursor-pointer fixed right-10 bottom-10 px-3 py-1 rounded-md font-bold hover:bg-slate-900 bg-slate-950 text-slate-200"
            onClick={handleLogOut}    
        >Log Out
        </Link>
        <Footer />
    </div>
  )
}

export default Main
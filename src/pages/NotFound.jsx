import {Link} from "react-router-dom"
import NotFoundBg from "../assets/notFound.jpg"
const NotFound = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-4" style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${NotFoundBg})`
         }}>
            <p className="text-4xl font-bold text-white">404 Not Found</p>
            <Link to="/" className="underline text-white">back to home</Link>
        </div>
    )
}

export default NotFound
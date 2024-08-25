import Avatar from "../../assets/avatar.jpg"
import Bg from "../../assets/pexels-matheus-bertelli-573299.jpg"
import Identity from "./Identity"
const About = () => {
    return (
        <div className="w-full flex lg:flex-row flex-col items-end relative lg:py-20 py-44" id="about">
                <div className="flex-1 p-8 flex gap-10 text-justify flex-col justify-start">
                    <div className="w-full">
                        <header className="font-bold text-xl font-sans">
                        Reprehenderit consectetur incididunt aliqua consectetur Lorem
                    </header>
                    </div>
                    <div className="flex lg-flex-row flex-col gap-10 lg:items-start items-center indent-10 ">
                        <div className="flex h-[10rem] gap-2 w-full max-w-full">
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                            <Identity Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg"/>
                        </div>
                        <p>Voluptate adipisicing voluptate adipisicing enim. Quis Lorem velit aliqua enim. Sunt aute eiusmod excepteur nisi minim. Non sit culpa in non qui do non voluptate labore anim ea. Eiusmod quis culpa laboris nisi ipsum nostrud commodo commodo ut commodo commodo excepteur. Pariatur fugiat ut aute nulla consequat Lorem tempor in labore ullamco dolore. Sit aliqua est do sunt officia.</p>
                    </div>
                </div>
                <div className="flex-1 p-8 box-border">
                    <img src={Bg} alt="" className="blur-sm hover:blur-none transition duration-700 rounded-md"/>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -z-10 top-0">
                    <path fill="#cbd5e0" fill-opacity="1" d="M0,32L26.7,69.3C53.3,107,107,181,160,181.3C213.3,181,267,107,320,74.7C373.3,43,427,53,480,64C533.3,75,587,85,640,106.7C693.3,128,747,160,800,186.7C853.3,213,907,235,960,213.3C1013.3,192,1067,128,1120,101.3C1173.3,75,1227,85,1280,90.7C1333.3,96,1387,96,1413,96L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
        </div>
    )
}

export default About
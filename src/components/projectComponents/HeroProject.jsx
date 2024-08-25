import HeroImg from "../../assets/her02.png"
import Typewriter from "../../utils/TypeWriterEffect";

const HeroProject = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center lg:p-6 p-3 lg:flex-row md:flex-row flex-col lg:gap-0 ">
            <div className="flex-1 px-5 lg:h-1/2 lg:inline-block flex flex-col justify-center">
                <h1 className="lg:text-left lg:text-7xl text-5xl font-semibold">Discover the Project that I'm Proud of</h1>
                <p className="mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt pariatur facere explicabo ipsum dolorum, aspernatur sed ad error in?</p>
                <div>
                <button className="bg-slate-950 text-white px-5 py-2 mt-5 rounded-full hover:bg-slate-600">Check It Out!</button>
                </div>
            </div>
            <div className="hidden flex-1 lg:flex md:flex flex-col px-20 lg:items-start items-center">
                <img src={HeroImg} alt=""/>
            </div>
        </div>
    );
};

export default HeroProject;

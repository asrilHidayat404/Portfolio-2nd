import HeroImg from "../../assets/hero04.png"
import Typewriter from "../../utils/TypeWriterEffect";

const Hero = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center lg:p-6 p-3 lg:flex-row flex-col lg:gap-0 gap-10 relative">
            <div className="flex-1 flex flex-col px-20 lg:items-start items-center mt-32 lg:mt-0">
                <img src={HeroImg} alt="" width="250px" className="bayang rounded-full"/>
                <h1 className="lg:text-5xl text-3xl mb-2 mt-2 owner">Asril Hidayat</h1>
                <p className="text-slate-500 h-5 mb-2">
                    {/* <Typewriter text="Programmer | Collegent" delay={200} infinite /> */}
                    Programmer | Collegent
                </p>
                <p className="lg:text-left text-center">Fugiat sunt dolore consequat elit non tempor culpa elit.</p>
                <button className="bg-slate-950 text-white px-5 py-2 mt-5 rounded-full hover:bg-slate-600">Contact Me</button>
            </div>
            <div className="flex-1 px-10 text-center lg:text-left">
                <q className="lg:text-4xl text-2xl text-shadow-lg quotes lg:text-left text-center lg:h-32 inline-block">
                    <Typewriter text="It is not who I am underneath, but what I do that defines me." delay={150} infinite/>
                </q>
                <p>—Bruce Wayne—</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 -z-10">
                <path fill="#CBD5E0" fill-opacity="1" d="M0,256L60,256C120,256,240,256,360,218.7C480,181,600,107,720,117.3C840,128,960,224,1080,224C1200,224,1320,128,1380,80L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default Hero;

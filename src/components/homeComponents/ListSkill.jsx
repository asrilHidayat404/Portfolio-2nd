import { useEffect, useState } from "react";
import Skill from "./Skill";

const ListSkill = ({Icon, SkillName}) => {
    const [spin, setSpin] = useState("");
    useEffect(() => {
        window.AOS.init({ // Initialization
          duration: 1000
        });
      });

    return (
        <div
            data-aos="flip-right"
            className="w-36 h-36 bg-white transition-all duration-1000 flex flex-col items-center justify-evenly rounded-2xl hover:bg-slate-950 hover:text-white"
            onMouseEnter={() => setSpin("scale-105 transition duration-400")} 
            onMouseLeave={() => setSpin("")}
        >
            <div className={spin}>
                <img src={Icon} width="80px" className={`${spin} ${SkillName == 'Next JS' ? 'min-w-[120px]' : null}`}/>
            </div>
            <div className="font-sans font-semibold">{SkillName}</div>
        </div>
    );
};

export default ListSkill

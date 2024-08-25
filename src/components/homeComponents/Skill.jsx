import ListSkill from "./ListSkill"
import Html from "../../assets/skillLogos/html.png"
import Css from "../../assets/skillLogos/css.png"
import Js from "../../assets/skillLogos/js.png"
import Tailwind from "../../assets/skillLogos/tailwind.png"
import React from "../../assets/skillLogos/react.svg"
import Mysql from "../../assets/skillLogos/sql.png"

const Skill = () => {
    return (
        <div className="w-full py-5 bg-slate-300">
            <header className="w-full p-10 text-center">
                <p className="text-3xl font-bold">My Skills</p>
            </header>
            <div className="w-full flex justify-evenly flex-wrap gap-10 lg:px-36">
                <ListSkill Icon={Html} SkillName={"HTML"}/>
                <ListSkill Icon={Css} SkillName={"CSS"}/>
                <ListSkill Icon={Js} SkillName={"JavaScript"}/>
                <ListSkill Icon={Tailwind} SkillName={"Tailwind"}/>
                <ListSkill Icon={React} SkillName={"React"}/>
                <ListSkill Icon={Mysql} SkillName={"Mysql"}/>
            </div>
        </div>
    )
}

export default Skill
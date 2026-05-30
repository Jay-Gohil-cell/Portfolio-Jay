import axios from "../assets/SkillIcons/axios.svg"
import restApi from "../assets/SkillIcons/api.svg"
import respon from "../assets/SkillIcons/responsive.svg"
import css from "../assets/SkillIcons/css3.svg"
import html from "../assets/SkillIcons/html5.svg"
import js from "../assets/SkillIcons/javascript.svg"
import react from "../assets/SkillIcons/reactjs.svg"
import tailwind from "../assets/SkillIcons/tailwindcss.svg"
import jquery from "../assets/SkillIcons/jquery.svg"
import vscode from "../assets/SkillIcons/vscode.svg"
import git from "../assets/SkillIcons/git.svg"
import github from "../assets/SkillIcons/github-dark.svg"
import Skillicon from "../Other-pageComponent/Skillicon"
import Strength from "../Other-pageComponent/Strength"


const Skills = () => {
    return (
        <section id="skills" className="-mt-px pb-10 pt-5 scroll-mt-35 md:scroll-mt-15 w-full lg:px-35 lg:pb-20 px-10 md:px-20">
            <p className="md:text-5xl text-4xl font-bold text-center upper text-black pr underline underline-offset-15 decoration-2 mb-10 ">Skills</p>
            <p className="md:text-xl text-lg text-center mb-10">The tools, languages, and frameworks I use to build the digital world.</p>

            <div className="flex gap-10 md:gap-20 lg:gap-40 flex-col lg:flex-row">

                <div className="flex flex-col w-full h-full shadow-[#666666] shadow-2xl">
                    <div className="bg-[#666666] w-full text-center p-3 mb-0 text-white text-3xl font-extralight">Technical Skill</div>
                    <div className="bg-[gray] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-10 gap-y-5 px-10 py-5  lg:gap-x-6 lg:gap-y-4 lg:px-6 lg:py-4 h-auto min-h-100 grayscale-95 hover:grayscale-0 transition-all duration-300 text-white text-lg font-semibold">
                        <Skillicon which={`${html}`} name="HTML5"/>
                        <Skillicon which={`${css}`} name="CSS3"/>
                        <Skillicon which={`${js}`} name="JavaScript"/>
                        <Skillicon which={`${jquery}`} name="JQuery"/>
                        <Skillicon which={`${react}`} name="ReactJS"/>
                        <Skillicon which={`${tailwind}`} name="TailWind"/>
                        <Skillicon which={`${restApi}`} name="RESt APIs"/>
                        <Skillicon which={`${axios}`} name="axios"/>
                        <Skillicon which={`${respon}`} name="responsive"/>
                        <Skillicon which={`${vscode}`} name="VS Code"/>
                        <Skillicon which={`${git}`} name="Git"/>
                        <Skillicon which={`${github}`} name="GitHub"/>
                    </div>
                </div>
                <hr className=" lg:hidden" />
                <div className="w-full flex flex-col gap-5  ">
                    <div className="bg-[#666666] w-full text-center text-white p-3 text-3xl font-extralight shadow-[#666666] shadow-2xl">Strength</div>
                    <Strength streng="Honest, Responsible & Self-Disciplined" />
                    <Strength streng="Calm and Patient During Tasks" />
                    <Strength streng="Strong Willingness to Learn New Technologies" />
                    <Strength streng="Responsive Web Design, UI Development, Basic Front-End Development" />
                    <Strength streng="I’m passionate about crafting exceptional user experiences and continuously learning modern web technologies." />
                </div>
            </div>
        </section>
    )
}

export default Skills

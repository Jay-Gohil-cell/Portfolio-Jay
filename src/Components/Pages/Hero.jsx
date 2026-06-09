import heroBg from "../assets/hero-bg.png"
import resumePdf from "/Jay_Gohil_Resume.pdf"


const Hero = () => {
    return (
        <section id="Home" className="scroll-mt-24 flex flex-wrap w-full h-[calc(100vh-68px)] bg-cover bg-no-repeat lg:bg-left bg-position-[right_-700px_center]" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className=" px-5 w-full md:w-[70vw] lg:w-[55vw] md:pl-15 lg:pl-25 pt-5 flex flex-col justify-center items-start ">
                <p className="md:text-9xl text-7xl font-bold lg:mb-3">Hi</p>
                <p className="md:text-7xl text-7xl font-bold">I'm Jay</p>
                <p className="lg:text-xl md:text-xl text-lg text-black mt-10 mr-8 lg:mr-30 ">Awesome frontend developer in the making - headed out (Excitedly) on the road to mastery !</p>
                <p className="md:text-xl text-lg mt-5">Welcome to my portfolio :)</p>
                <div className="flex gap-2 md:gap-5">
                    <a href="#Contact"><button className="w-35 h-9 hover:bg-[black]/50 bg-black/90 duration-300 text-white text-lg md:text-xl font-medium mt-8">Hire me !</button></a>
                    <a
                        href={resumePdf}
                        download="Jay_Gohil_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><button className="w-35 block lg:hidden h-9 hover:bg-[black]/50 bg-black/90 duration-300 text-white text-lg md:text-xl font-medium mt-8">Resume</button>
                    </a>
                </div>

            </div>
            <div></div>
        </section>
    )
}

export default Hero

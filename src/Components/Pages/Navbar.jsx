import { useEffect, useState } from 'react'
import resumePdf from "/Jay_Gohil_Resume.pdf"

const Navbar = () => {
    const [isOpen, setMenu] = useState(false);
    const [isDown, setDown] = useState(false);

    useEffect(() => {

        const scrolled = () => {
            if (window.scrollY >= 100) {
                setDown(true);
            } else if (window.scrollY < 100) {
                setDown(false);
            }
        }

        window.addEventListener("scroll", scrolled);
        return () => window.removeEventListener("scroll", scrolled);
    }, []);

    return (
        <div className={`${isDown ? 'bg-black/60 backdrop-blur-md' : 'bg-black/75'} sticky top-0 z-50 transition-all duration-300 text-white w-full`}>
            <div className={`flex px-10 lg:px-20 xl:px-25 bg-transparent justify-between items-center h-17`}>
                <span className='text-4xl w-auto font-bold'>Jay Gohil</span>
                <ul className='hidden md:flex md:gap-5 lg:gap-10 text-gray-300 text-md'>
                    <a href="#Home"><li className='hover:text-white hover:-translate-y-1 duration-300'>Home</li></a>
                    <a href="#About"><li className='hover:text-white hover:-translate-y-1 duration-300'>About</li></a>
                    <a href="#Education"><li className='hover:text-white hover:-translate-y-1 duration-300'>Education</li></a>
                    <a href="#skills"><li className='hover:text-white hover:-translate-y-1 duration-300'>Skills</li></a>
                    <a href="#Project"><li className='hover:text-white hover:-translate-y-1 duration-300'>Project</li></a>
                    <a href="#Contact"><li className='hover:text-white hover:-translate-y-1 duration-300'>Contact</li></a>
                </ul>
                <a
                    href={resumePdf}
                    download="Jay_Gohil_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                ><button className='hidden lg:flex justify-center items-center bg-white text-black w-34 text-md h-10 rounded-sm hover:scale-x-105 transition-all duration-300'>Resume</button></a>

                <div className='flex md:hidden relative'>
                    <button className='text-black' onClick={() => setMenu(!isOpen)}>
                        {isOpen ? 'CLose' : 'Menu'}
                    </button>
                </div>


            </div>
            {isOpen && (
                <ul className='md:hidden flex bg-black/60 duration-300 text-gray-300 text-xl font-medium flex-col justify-center items-center gap-7 w-full absolute py-10 top-17'>
                    <a href="#Home"><li className='hover:text-white duration-300' onClick={() => setMenu(!isOpen)}>Home</li></a>
                    <a href="#About"><li className='hover:text-white duration-300' onClick={() => setMenu(!isOpen)}>About</li></a>
                    <a href="#Education"><li className='hover:text-white duration-300' onClick={() => setMenu(!isOpen)}>Education</li></a>
                    <a href="#skills"><li className='hover:text-white duration-300' onClick={() => setMenu(!isOpen)}>Skills</li></a>
                    <a href="#Project"><li className='hover:text-white duration-300' onClick={() => setMenu(!isOpen)}>Project</li></a>
                    <a href="#Contact"><li className='hover:text-white duration-300' onClick={() => setMenu(!isOpen)}>Contact</li></a>
                </ul>
            )}
        </div>
    );
}

export default Navbar

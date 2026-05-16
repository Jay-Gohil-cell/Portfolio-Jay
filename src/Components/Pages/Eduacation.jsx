import SchoolDetails from "../Other-pageComponent/SchoolDetails"
import eduImage from "../assets/education.png"

const Eduacation = () => {
    return (
        <section id="Education" className="-mt-px pb-10 pt-5 scroll-mt-35 md:scroll-mt-15 w-screen lg:px-35 lg:pb-20 px-10 md:px-20  bg-[gray] text-white">
            <p className="md:text-5xl text-4xl font-bold text-center text-black md:pr-5 underline underline-offset-15 decoration-2 mb-10 ">Education</p>
            <p className="md:text-xl text-sm text-center mb-12 lg:px-40">Building a strong foundation through formal education, where I turned theoretical concepts into practical problem-solving skills.</p>
            <div className="flex justify-center gap-30">    
                <div className="w-[20vw] bg-cover hidden lg:block bg-center shadow-[#666666] shadow-2xl" style={{backgroundImage : `url(${eduImage})`}}></div>
                <div className=" flex flex-col gap-10 wrap-break-word ">
                    <SchoolDetails degree="Bachelor of Computer Application(BCA)" name="Smt. K.B. Parekh Computer Science College, Mahuva (MKBU University)" year="2022 - 2025" result="64.47% - First Class" /><hr className=" md:hidden" />
                    <SchoolDetails degree="Higher Secondary Certificate (HSC)" name="Government High School, Tared" year="2021 - 2022" result="92.40 PR " /><hr className=" md:hidden" />
                    <SchoolDetails degree="Government High School, Tared" name="Government High School, Tared" year="2019 – 2020" result="82.74 PR" /><hr className=" md:hidden" />
                </div>
            </div>

        </section>
    )
}

export default Eduacation

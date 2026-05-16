import backBtn from "../assets/bold-arrow-top-icon.svg";

const Footer = () => {
    return (
        <footer className="w-full bg-black/70 text-white uppercase px-6 md:px-12 lg:px-20 py-10 overflow-hidden">

            {/* Top Row */}
            <div className="flex items-center justify-between text-sm md:text-lg lg:text-2xl">

                <p className="underline underline-offset-8">
                    Looking for Opportunity
                </p>

                <a
                    href="#Home"
                    className="flex items-center gap-3 group"
                >
                    <span>Back to top</span>

                    <img
                        src={backBtn}
                        alt="Back To Top"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white p-2 transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </a>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 my-14">

                {/* Left Side */}
                <div>

                    <p className="text-sm md:text-lg tracking-[0.3em] mb-2 text-gray-300">
                        Any Opportunities?
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-thin tracking-tight text-gray-200 leading-none">
                        LET'S CREATE
                    </h1>
                </div>

                {/* Right Side */}
                <p className="max-w-md text-xs sm:text-sm normal-case text-gray-300 leading-7">
                    I'm always open to discussing new projects,
                    creative ideas or opportunities to be part
                    of your vision.
                </p>
            </div>

            <hr className="border-white/20" />

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-6 text-[10px] sm:text-xs md:text-sm font-light text-gray-300">

                <p>
                    © 2026 Jay Gohil. All Rights Reserved.
                </p>

                <p className="cursor-pointer hover:text-white duration-300">
                    Privacy Policy | Terms & Conditions
                </p>
            </div>
        </footer>
    );
};

export default Footer;
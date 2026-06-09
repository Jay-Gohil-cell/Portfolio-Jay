import portfolioImg from "../assets/project-img/portfolio.png";
import mapMind from "../assets/project-img/mapmind.png";

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Portfolio Website",
            img: portfolioImg,
            alt: "Portfolio Project",
            description: "A clean, minimalist personal portfolio built with React.js and Tailwind CSS to showcase my frontend development journey, skills, and projects dynamically.",
            tags: ["React JS", "Tailwind CSS", "JavaScript", "Responsive Design"],
            liveLink: "https://portfolio-jay-ten.vercel.app/",
            codeLink: "https://github.com/Jay-Gohil-cell/Portfolio-Jay",
            isUpcoming: false,
            isCurrentPortfolio: true
        },
        {
            id: 2,
            title: "MapMind Project",
            img: mapMind,
            alt: "MapMind Project",
            description: "Interactive World Atlas web application featuring real-time country data fetched via Rest APIs. Built with React.js and Tailwind CSS.",
            tags: ["React JS", "Tailwind CSS", "JavaScript", "Rest APIs", "Responsive Design"],
            liveLink: "https://mapmind-explore-world.vercel.app/",
            codeLink: "https://github.com/Jay-Gohil-cell/MapMind",
            isUpcoming: false
        },
        {
            id: 3,
            title: "Coming Soon",
            description: "Stay tuned for an exciting new project that combines cutting-edge technologies to deliver an exceptional user experience. More details coming soon!",
            tags: ["New Technologies", "Innovative Design", "User Experience"],
            isUpcoming: true
        }
    ];

    return (
        <section id="Project" className="md:-scroll-mt-35 w-full py-16 px-6 md:px-12 lg:px-24 bg-[gray] text-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-full after:h-1 after:bg-black">
                        Projects
                    </h2>
                    <p className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto mt-6 font-medium">
                        A collection of my recent work, where design meets functionality. Each project taught me something new.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectList.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col grayscale hover:grayscale-0 shadow-gray-700 shadow-2xl justify-between bg-white text-black border px-8 py-5 border-gray-300 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="w-full h-48 md:h-52 overflow-hidden bg-gray-100 flex items-center justify-center border-b border-gray-200">
                                {project.isUpcoming ? (
                                    <div className="flex flex-col items-center justify-center text-center p-4">
                                        <span className="text-4xl mb-2">🚀</span>
                                        <span className="text-sm font-bold tracking-widest text-black uppercase">Coming Soon</span>
                                    </div>
                                ) : (
                                    <img
                                        src={project.img}
                                        alt={project.alt}
                                        className="w-full h-full object-cover shadow-2xl shadow-black transition-transform duration-500 hover:scale-105"
                                    />
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-2 flex items-center justify-between">
                                        {project.title}
                                        {project.isUpcoming && (
                                            <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded">
                                                New
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed text-justify line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="my-5">
                                    <ul className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <li key={index} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-md font-semibold">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons Area */}
                                <div className="mt-2">
                                    {project.isUpcoming ? (
                                        <div className="w-full bg-gray-100 border border-gray-300 text-center text-gray-500 text-xs py-2.5 font-bold italic">
                                            Work in progress... 🛠️
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4">
                                            <a
                                                href={project.liveLink}
                                                className="inline-flex justify-center items-center bg-black hover:bg-gray-800 text-white font-bold py-2.5 px-4  text-sm transition-colors text-center shadow-sm"
                                            target="_blank">
                                                View Project
                                            </a>
                                            <a
                                                href={project.codeLink}
                                                className="inline-flex justify-center items-center bg-white hover:bg-gray-100 text-black font-bold py-2.5 px-4  text-sm transition-colors text-center border border-black"
                                            target="_blank">
                                                View Code
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
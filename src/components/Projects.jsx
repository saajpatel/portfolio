import projectPlaceholderImage from '../assets/project-placeholder-image.jpg'
import mindmateImage from '../assets/mindmate-project-image.jpg'
import ecommerceImage from '../assets/ecommerce-project-image.jpg'
import cmsImage from '../assets/cms-project-image.jpg'

function Projects({ ref }) {
    return (
        <section
            ref={ref}
            id="projects"
                className="min-h-screen bg-zinc-900 snap-start snap-always pt-28 pb-24 px-6"
        >
            <div className="flex justify-between items-center font-['Montserrat'] text-gray-400 px-40">
                <div className="flex flex-col">
                    <div className="font-['Raleway'] text-2xl font-bold mb-3 text-white">Projects.</div>
                    <div>These are some projects that I've built throughout my career.</div>
                </div>

                    <div className="hidden text-sm">GitHub card idk?</div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-7 px-40 font-['Montserrat']">
                
                {/* Card 1 - image on top (smaller on base) */}
                <div className="card border border-zinc-700 bg-base-200/40 shadow-sm h-44 w-full overflow-hidden rounded-sm">
                    <figure className="h-12 w-full flex-none">
                        <img src={mindmateImage} alt="FireShare" className="h-full w-full object-cover object-[100%_38%]" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-blue-300 text-base font-semibold font-['Raleway'] hover:underline">
                            <a href="https://devpost.com/software/mindmate-t0hrs6">Mindmate</a>
                        </h3>
                        <p className="text-xs text-white/85 overflow-y-auto max-h-9">A full-stack app built during a hackathon. Skill sharing platform with AI-verified video demos and real time chat.</p>
                        <div className="mt-auto card-actions justify-start gap-1 text-white/85">
                            <div className="badge-xs flex items-center">
                                <div className="bg-red-500 w-2 h-2 rounded-full inline mr-1"></div>
                                React
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="bg-blue-500 w-2 h-2 rounded-full inline mr-1"></div>
                                Express
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="bg-green-500 w-2 h-2 rounded-full inline mr-1"></div>
                                PostgreSQL
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="bg-yellow-500 w-2 h-2 rounded-full inline mr-1"></div>
                                Gemini API
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - image on top */}
                <div className="card border border-zinc-700 bg-base-200/40 shadow-sm h-44 w-full overflow-hidden rounded-sm">
                    <figure className="h-12 w-full">
                        <img src={ecommerceImage} alt="Spring Social" className="h-full w-full object-cover object-[100%_52%]" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-blue-300 text-base font-semibold font-['Raleway'] hover:underline">
                            <a href="">Basic E-Commerce Site</a>
                        </h3>
                        <p className="text-xs text-white/85 overflow-y-auto max-h-9">Amazon clone with a cart, checkout, orders and tracking pages. </p>
                        <div className="mt-auto card-actions justify-start gap-1 text-white/85">
                            <div className="badge-xs flex items-center">
                                <div className="bg-red-500 w-2 h-2 rounded-full inline mr-1"></div>
                                React
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="bg-blue-500 w-2 h-2 rounded-full inline mr-1"></div>
                                Express
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="bg-green-500 w-2 h-2 rounded-full inline mr-1"></div>
                                SQLite
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 - image on top */}
                <div className="card border border-zinc-700 bg-base-200/40 shadow-sm h-44 w-full overflow-hidden rounded-sm">
                    <figure className="h-12 w-full">
                        <img src={cmsImage} alt="Recycle-PI" className="h-full w-full object-cover object-[100%_55%]" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-blue-300 text-base font-semibold font-['Raleway'] hover:underline">
                            <a href="">Contact Management System</a>
                        </h3>
                        <p className="text-xs text-white/85 overflow-y-auto max-h-9">Efficient employee management system with structs. Create, read, and search for contacts.</p>
                        <div className="mt-auto card-actions justify-start gap-1 text-white/85">
                            <div className="badge-xs flex items-center">
                                <div className="bg-purple-500 w-2 h-2 rounded-full inline mr-1"></div>
                                C
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="bg-yellow-500 w-2 h-2 rounded-full inline mr-1"></div>
                                MakeFile
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card border border-zinc-700 bg-base-200/40 shadow-sm h-44 w-full overflow-hidden rounded-sm">
                    <figure className="h-12 w-full">
                        <img src={projectPlaceholderImage} alt="Recycle-PI" className="h-full w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-blue-300 text-base font-semibold font-['Raleway'] hover:underline">
                            <div>Coming Soon...</div>
                        </h3>
                        <p className="text-xs text-white/85 overflow-y-auto max-h-9"></p>
                        <div className="mt-auto card-actions justify-start gap-1 text-white/85">
                            <div className="badge-xs flex items-center">
                                <div className="w-2 h-2 rounded-full inline mr-1"></div>
                                
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="w-2 h-2 rounded-full inline mr-1"></div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border border-zinc-700 bg-base-200/40 shadow-sm h-44 w-full overflow-hidden rounded-sm">
                    <figure className="h-12 w-full">
                        <img src={projectPlaceholderImage} alt="Recycle-PI" className="h-full w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-blue-300 text-base font-semibold font-['Raleway'] hover:underline">
                            <div>Coming Soon...</div>
                        </h3>
                        <p className="text-xs text-white/85 overflow-y-auto max-h-9"></p>
                        <div className="mt-auto card-actions justify-start gap-1 text-white/85">
                            <div className="badge-xs flex items-center">
                                <div className="w-2 h-2 rounded-full inline mr-1"></div>
                                
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="w-2 h-2 rounded-full inline mr-1"></div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border border-zinc-700 bg-base-200/40 shadow-sm h-44 w-full overflow-hidden rounded-sm">
                    <figure className="h-12 w-full">
                        <img src={projectPlaceholderImage} alt="Recycle-PI" className="h-full w-full object-cover" />
                    </figure>
                    <div className="card-body p-4">
                        <h3 className="card-title text-blue-300 text-base font-semibold font-['Raleway'] hover:underline">
                            <div>Coming Soon...</div>
                        </h3>
                        <p className="text-xs text-white/85 overflow-y-auto max-h-9"></p>
                        <div className="mt-auto card-actions justify-start gap-1 text-white/85">
                            <div className="badge-xs flex items-center">
                                <div className="w-2 h-2 rounded-full inline mr-1"></div>
                                
                            </div>
                            <div className="badge-xs flex items-center">
                                <div className="w-2 h-2 rounded-full inline mr-1"></div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;

/* 
    const projects = [
        {
            title: "Project One",
            description: "A full-stack web application built with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Project Two", 
            description: "Mobile-responsive e-commerce platform with payment integration",
            technologies: ["Next.js", "Stripe", "PostgreSQL"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Project Three",
            description: "Data visualization dashboard for analytics",
            technologies: ["Vue.js", "D3.js", "Python"],
            githubUrl: "#",
            liveUrl: "#"
        }
    ];
*/

/* 

    function Projects({ ref }) {

    return (
        <section ref={ref} id="projects" className="min-h-screen bg-base-100 snap-start snap-always pt-28 px-40">
            
            <div className="flex justify-between items-center font-['Montserrat'] text-gray-400">

                <div className="flex flex-col">
                    <div className="font-['Raleway'] text-2xl font-bold mb-5 text-white">
                        Projects.
                    </div>
                    <div>
                        These are some projects that I've built throughout the years.
                    </div>
                </div>

                <div>
                    hi idk github card?
                </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-7">
                <div className="card border border-gray-400 w-96 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" 
                    className="w-full h-0 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                </div>
                <div className="border-gray-400 border rounded-sm">
                    hi
                </div>
                <div className="border-gray-400 border rounded-sm">
                    hi
                </div>
                
            </div>


        </section>
    );
}

export default Projects;

*/
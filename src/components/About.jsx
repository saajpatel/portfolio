import jsLogo from '../assets/logos/javascript-logo.svg'
import cLogo from '../assets/logos/c-logo.svg'
import pythonLogo from '../assets/logos/python-logo.svg'
import htmlLogo from '../assets/logos/html-logo.svg'
import cssLogo from '../assets/logos/css-logo.svg'
import javaLogo from '../assets/logos/java-logo.svg'
import reactLogo from '../assets/logos/react-logo.svg'
import tailwindLogo from '../assets/logos/tailwind-logo.svg'
import rLogo from '../assets/logos/r-logo.svg'
import gitLogo from '../assets/logos/git-logo.svg'
import nodejsLogo from '../assets/logos/nodejs-logo.svg'
import dockerLogo from '../assets/logos/docker-logo.svg'
import postgreSQLLogo from '../assets/logos/postgresql-logo.svg'
import mongodbLogo from '../assets/logos/mongodb-logo.svg'

function About() {
    return (
        <section id="about" className="min-h-screen bg-zinc-900 snap-start snap-always pt-28 px-40 flex flex-col justify-between">
            
            <div>
                
                <div className="font-['Raleway'] text-2xl font-bold mb-4 text-white">
                    Skills.
                </div>
                <div className='flex gap-4 mb-8 overflow-auto TEMPERARY}'>
                    
                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={htmlLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>HTML</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={cssLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>CSS</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={jsLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>JavaScript</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={cLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>C/C++</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={pythonLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>Python</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={javaLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>Java</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={reactLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>React</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={tailwindLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>TailwindCSS</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={rLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>R</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={gitLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>Git</div>
                    </div>

                </div>

                <div className="font-['Raleway'] text-2xl font-bold mb-4 text-white">
                    Currently Learning.
                </div>
                <div className='flex gap-4 mb-8 overflow-auto TEMPERARY'>
                    
                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={nodejsLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>Node.JS</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={dockerLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>Docker</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={postgreSQLLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>PostgreSQL</div>
                    </div>

                    <div className="flex flex-col items-center font-['Montserrat']">
                        <img src={mongodbLogo} className='h-12 w-12 mb-1' />
                        <div className='text-xs'>MongoDB</div>
                    </div>

                </div>

                <div className="font-['Raleway'] text-2xl font-bold mb-4 text-white">
                    That's it!
                </div>
                <div className="font-['Montserrat'] text-gray-400"> 
                    I'll be updating this later as I build more projects in the future.
                </div>
            </div>

            <footer className="pb-7 font-['Raleway'] text-xs self-center flex flex-col items-center">
                <div>Saaj Patel © 2025</div>
                <div>Thanks for visiting :)</div>
            </footer>

        </section>
    );
}

export default About

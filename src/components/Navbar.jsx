

function Navbar() {

    return (
       <nav className="navbar bg-transparent p-10 fixed top-0 w-full z-100 font-['Raleway'] pointer-events-none">
            <div className="flex-1">
                    <a className="text-xl cursor-pointer font-bold">
                        Saaj
                    </a>
            </div>
            <div className="flex-none pointer-events-auto text-gray-400">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <li>
                        <a href='#profile'>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href='#projects'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#about'>
                            About
                        </a>
                    </li>
                
                </ul>
            </div>
        </nav>
    )

}

export default Navbar
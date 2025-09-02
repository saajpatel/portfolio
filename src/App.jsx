import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {

  return (
    <div>

      <Navbar />
      
  <main className="h-auto overflow-visible snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

        <Profile />
        
        <Projects />

        <About />

      </main>

    </div>
  )
}

export default App


/* 
      <Profile ref={profileRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
*/
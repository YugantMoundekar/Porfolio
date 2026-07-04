import Hero from "./components/Hero"
import Work from "./components/Work"
import About from "./components/About"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
// Services, Project and Contact are built but not wired up yet.
// Import and render them here when they're ready to go live.
function App() {

  return (
    <div className="bg-back font-inter" >
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
      <Footer />
    </div>
  )
}

export default App

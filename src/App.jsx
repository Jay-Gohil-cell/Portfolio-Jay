import About from './Components/Pages/About'
import Eduacation from './Components/Pages/Eduacation'
import Hero from './Components/Pages/Hero'
import Navbar from './Components/Pages/Navbar'
import Arrow from './Components/Other-pageComponent/Arrow'
import Skills from './Components/Pages/Skills'
import Projects from './Components/Pages/Projects'
import Contact from './Components/Pages/Contact'
import Footer from './Components/Pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Arrow textcolor="black" bgcolor="white"/>
      <About />
      <Arrow textcolor="white" bgcolor="gray"/>
      <Eduacation />
      <Arrow textcolor="black" bgcolor="white"/>
      <Skills />
      <Arrow textcolor="white" bgcolor="gray"/>
      <Projects />
      <Arrow textcolor="black" bgcolor="white"/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App

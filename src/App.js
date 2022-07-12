import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const App = () => (
  <Router>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
  </Router>
)

export default App
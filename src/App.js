import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contacts from './sections/Contacts'

const App = () => (
  <Router>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contacts />
  </Router>
)

export default App
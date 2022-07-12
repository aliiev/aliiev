import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

const App = () => (
  <Router>
    <Navbar />
    <Hero />
    <About />
    <Projects />
  </Router>
)

export default App
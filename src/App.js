import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

const App = () => (
  <Router>
    <Navbar />
    <Hero />
    <About />
    <div className="h-screen"></div>
    <div className="h-screen"></div>
  </Router>
)

export default App
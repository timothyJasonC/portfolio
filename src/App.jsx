import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <section className="font-poppins">
      <Navbar />
      <About />
      <Projects data-aos='fade-in'/>
      <Education />
      <Skills />
    </section>
  )
}

export default App

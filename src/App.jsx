
import './App.css'
import Navbar from './1Navbar/navbar'
import Hero from './2Hero/Hero'
import About from './3About/About'
import Skills from './4Skills/skills'
import { Project } from './5Projects/Project'
import Connect from './6Connect/Connect'



function App() {
  return (
    <>
      <div className='mainWrapper'>
        <Navbar />
        <Hero />
        <About/>
        <Skills/>
        <Project/>
        <Connect/>
      </div>
    </>
  )
}
export default App





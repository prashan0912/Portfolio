
import './App.css'
import Navbar from './1Navbar/navbar'
import Hero2 from './2Hero/Hero2'
import About from './3About/About'
import Skills from './4Skills/skills'
import Project from './5Projects/Project2'
import Connect from './6Connect/Connect'


function App() {


  return (
    <>
      <div className='mainWrapper'>
        <Navbar />
        <Hero2 />
        <About />
        <Skills />
        <Project />
        <Connect />
      </div>
    </>
  )
}
export default App





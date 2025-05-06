
import './App.css'
import Navbar from './1Navbar/navbar'
import Hero from './2Hero/Hero'
import About from './3About/About'
import Skills from './4Skills/skills'
import { Project } from './5Projects/Project'
import Connect from './6Connect/Connect'

import { useRef } from 'react'

function App() {

  const aboutRef = useRef(null);
  const connectRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef=useRef(null);
  return (
    <>
      <div className='mainWrapper'>
        <Navbar aboutRef={aboutRef} connectRef={connectRef} skillsRef={skillsRef} projectsRef={projectsRef} />
        <Hero />
        <div ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Project /></div>
        <div ref={connectRef}><Connect /></div>
      </div>
    </>
  )
}
export default App





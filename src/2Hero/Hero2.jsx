
import './Hero2.css'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Hero2() {

    return (
        <>
            <div className="heroContainer">
               
                <div className="photoContent"> </div>
                {/* <div id="hi">Hi! I am </div> */}
                <div id="name"> Hello! I'm <span>Prashant Sahu</span></div>
                <div id="variable">Software Engineer / Full Stack Developer </div>
                <div id="pursuing">Pursuing B.Tech from Bhilai institute of Technology Durg </div>
                <div className="buttonContainer">
                    <AnchorLink className="anchor-link" offset={50} href="#CONNECT">
                        <button className='Btn' >Connect me </button></AnchorLink>

                    <a href='.././assets/PrashantSahu.pdf' download><button className='Btn'>Resume</button></a>
                </div>
            </div>
        </>
    )
}
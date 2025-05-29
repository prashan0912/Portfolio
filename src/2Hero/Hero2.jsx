
import './Hero2.css'
import ReactDOM from 'react-dom'
export default function Hero2({ heroRef }) {


    function handleScrollToConnect() {
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="heroContainer">
                <div className="photoContent"> </div>
                {/* <div id="hi">Hi! I am </div> */}
                <div id="name"> Hello! I'm <span>Prashant Sahu</span></div>
                <div id="variable">Software Engineer / Full Stack Developer </div>
                <div id="pursuing">Pursuing B.Tech from Bhilai institute of Technology Durg </div>
                <div className="buttonContainer">
                    <button className='Btn' onClick={handleScrollToConnect}>Connect me </button>
                    <a href='.././assets/PrashantSahu.pdf' download><button className='Btn'>Resume</button></a>
                </div>
            </div>
        </>
    )
}

import './Hero.css'
import ReactDOM from 'react-dom'
export default function Hero() {

    return (
        <>
            <div className="heroContainer">
                <div className="divider">
                    <div className="sideBar">
                        <ol className="iconList">
                            <a href='https://www.linkedin.com/in/prashant-sahu-509970227/'><li className='linkedIn' ></li></a>
                            <a href='https://github.com/prashan0912'><li className="github"></li></a>
                            <a href='https://leetcode.com/u/prashan0912/'><li className="leetCode"></li></a>
                        </ol>
                    </div>
                    <div className="middle">
                        <div className="textContainer">
                            <div id="hi">Hi! I am </div>
                            <div id="name">Prashant Sahu</div>
                            <div id="variable">Software Engineer</div>
                            <div id="persing">Pursuing B.Tech from Bhilai institute of Technology Durg </div>
                            <div id="about">About me</div>
                            <div className="buttonContainer">
                                <button className='Btn'>Connect me </button>
                                <a href='.././assets/PrashantSahu.pdf' download><button className='Btn'>Resume</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="photoContent">
                        <div >
                        </div>
                        photo
                    </div>
                </div>
            </div>
        </>
    )
}
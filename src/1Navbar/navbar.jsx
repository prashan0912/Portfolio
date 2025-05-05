
import { useRef } from 'react';
import './navbar.css'
export default function Navbar() {

    const scroll = useRef(null);

    function handleScroll() {
        scroll.current?.scrollIntoView({ behavior: 'smooth' });
    }


    function clickHandle(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className="naver">
                <div className="logo">
                    Portfolio
                </div>
                <div className="list">
                    <ol className='listDetails'>
                        <li onClick={clickHandle}>About</li>
                        <li>Journey</li>
                        <li onClick={handleScroll}>Skills</li>
                        <li>Projects</li>
                        <li>Certification</li>
                        <li>Connect</li>
                        <li>Resume</li>
                    </ol>
                </div>

            </div>
        </>
    )
}
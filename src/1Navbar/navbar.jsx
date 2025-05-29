
import './navbar.css'
export default function Navbar({ aboutRef, connectRef, skillsRef, projectsRef }) {


    function handleScrollToAbout() {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleScrollToConnect() {
        connectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleScrollToSkills() {
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleScrollToProjects() {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="naver">
                <div className="logo">
                    Portfolio
                </div>
                <div className="list">
                    <ol className='listDetails'>
                        <li onClick={handleScrollToAbout}>About</li>
                        {/* <li>Journey</li> */}
                        <li onClick={handleScrollToSkills}>Skills</li>
                        <li onClick={handleScrollToProjects}>Projects</li>
                        {/* <li>Certification</li> */}
                        {/* <li onClick={handleScrollToConnect}>Connect</li> */}
                        <li>Resume</li>
                    </ol>
                </div>
                <div className='connect'>
                    <div onClick={handleScrollToConnect}>Connect</div>

                </div>

            </div>
        </>
    )
}
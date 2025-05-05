import { useState } from 'react'
import './Project.css'
export function Project() {

    const [state, setState] = useState(false)
    // const [state2, setState2] = useState(false)


    function handleClick() {
        setState(!state);
    }

    return (
        <>
            <div className="Project">
                <div className="ProjectTitle">
                    Project
                </div>
                <div className="projectWrapper">
                    <div className="content">

                        {!state && <div className="project1 projectPhoto" onClick={handleClick}>
                            <div className="projectImage crimeMapper">

                            </div>
                            <div className="projectInfo">
                                <div>Crime Mapper</div>
                            </div>
                        </div>}

                        {state && <div onClick={handleClick}>
                            <div className="project1 projectPhoto" onClick={handleClick}>
                                <div className="projectImage">
                                    <div className="subtitle">
                                        Crime Mapper
                                    </div>
                                    <div className="technologyUsed">
                                        html
                                    </div>
                                    <div className="aboutProject">
                                        this is our project

                                    </div>
                                    <div className="links">
                                        <div className="gitHubLinks">github</div>
                                        <div className="ProjectLinks">projectLink</div>
                                    </div>
                                </div>
                                <div className="projectInfo">
                                    {/* <div>Crime Mapper</div> */}
                                </div>
                            </div>
                        </div>}

                        <div className="project2 projectPhoto">
                            <div className="projectImage">
                            </div>
                            <div className="projectInfo">
                                <div>Crime Mapper</div>
                                <div>WebApplication</div>
                            </div></div>



                        <div className="project3 projectPhoto">  <div className="projectImage">
                        </div>
                            <div className="projectInfo">
                                <div>Crime Mapper</div>
                                <div>WebApplication</div>
                            </div> </div>
                        <div className="project4 projectPhoto">
                            <div className="projectImage">
                            </div>
                            <div className="projectInfo">
                                <div>Crime Mapper</div>
                                <div>WebApplication</div>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
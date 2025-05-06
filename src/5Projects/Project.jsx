import { useState } from 'react'
import './Project.css'
export function Project() {

    const [state1, setState] = useState(false)
    const [state2, setState2] = useState(false)

    // const [state2, setState2] = useState(false)


    function handleClick1() {
        setState(!state1);
    }
    function handleClick2() {
        setState2(!state2);
    }

    return (
        <>
            <div className="Project">
                <div className="ProjectTitle">
                    Project
                </div>

                <div className="projectWrapper">
                    <div className="content">



                        {!state1 && <div className="project1 projectPhoto" onClick={handleClick1}>
                            <div className="projectImage crimeMapper">

                            </div>
                            <div className="projectInfo">
                                <div>Crime Mapper</div>
                            </div>
                        </div>}

                        {state1 && <div onClick={handleClick1}>
                            <div className="project1 projectPhoto" onClick={handleClick1}>
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

                        {!state2 && <div className="project2 projectPhoto" onClick={handleClick2}>
                            <div className="projectImage crimeMapper">

                            </div>
                            <div className="projectInfo">
                                <div>Crime Mapper</div>
                            </div>
                        </div>}

                        {state2 && <div onClick={handleClick2}>
                            <div className="project2 projectPhoto" onClick={handleClick2}>
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


                        {/* <div className="project3 projectPhoto">  <div className="projectImage">
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
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
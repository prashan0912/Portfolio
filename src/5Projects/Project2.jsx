import './Project2.css'
import { useState } from 'react';
import { projectData } from '../assets/ProjectDetails'

export default function Project() {

    const [count, setCount] = useState(0);

    return (
        <>
            <div ID="PROJECTS" className="Project-Section">
                <div className="skillsTitle"><h1> Project Works</h1></div>
                <div className="project-wrapper">
                    {projectData.map((proj, index) => {
                        return (
                            <div key={index} className='project-format'>
                                <div className="projectDetails">
                                    <h1>{proj.p_Name}</h1>
                                    <p>{proj.p_Details}</p>
                                    <div className="tech-list">
                                        {Array.isArray(proj.p_tech) && proj.p_tech.map((tech, idx) => (
                                            <span key={idx} className={`tech-tag tech-tag-${idx % 6}`}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className="plinks">
                                        <p>{proj.p_link}</p>
                                        <p>{proj.git_link}</p>
                                    </div>
                                </div>

                                <div className="projectImage">
                                    <div className="leftarrow" onClick={() => setCount(count - 1)}>&lt;</div>
                                    <img src={proj.p_image[count % 3]} alt="img" style={{ height: 400, width: 400 }} />
                                    <div className="rightarrow" onClick={() => setCount(count + 1)}>&gt;</div>
                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>
        </>
    )
}
import './Project2.css'
import { projectData } from '../assets/ProjectDetails'
export default function Project() {


    return (
        <>
            <div className="Project-Section">
                <div className="skillsTitle"><h1> Project Works</h1></div>
                <div className="project-wrapper">
                    {projectData.map((proj, index) => {
                        return (
                            <div key={index} className='project-format'>
                                <div className="projectDetails">
                                    <h1>{proj.p_Name}</h1>
                                    <p>{proj.p_Details}</p>
                                    <p>{proj.p_tech}</p>
                                    <div className="plinks">
                                        <p>{proj.p_link}</p>
                                        <p>{proj.git_link}</p>
                                    </div>
                                </div>

                                <div className="projectImage">
                                    <img src={proj.p_image[0]} alt="img" style={{ height: 400, width: 400 }} />
                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>
        </>
    )
}
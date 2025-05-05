import React from 'react'
import "./skills.css"
export default function Journey() {
    return (
        <div className='skillsContainer' ref={scroll}>
            <div className="skillsTitle"><h1>Skills</h1></div>
            <div className="Skills">
                <div className="skillWrapper">
                    <table border="1" cellspacing="40">
                        <tr>
                            <td id='skill' className='skill2' name="html"></td>
                            <td id='skill' className='skill3' name="css"></td>
                            <td id='skill' className='skill10' name="JS"></td>
                            <td id='skill' className='skill1' name="react"></td>
                            <td id='skill' className='skill7' name="node" ></td>
                        </tr>
                        <tr>
                            <td id='skill' className='skill5' name="mongoDB"></td>
                            <td id='skill' className='skill6' name="git"></td>
                            <td id='skill' className='skill4' name="cpp"></td>
                            <td id='skill' className='skill9' name="mysql"></td>
                            <td id='skill' className='skill8'name="java"></td>



                        </tr>
                        <tr>
                            {/* <td id='skill' className='skill8'name="java"></td>
                            <td id='skill' className='skill9' name="mysql"></td> */}
                        </tr>
                        <tr>
                            {/* <td id='skill' className='skill10'></td> */}

                        </tr>
                    </table>
                </div>



            </div>
        </div>
    )
}

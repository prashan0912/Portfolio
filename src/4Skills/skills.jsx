
import React from 'react'
import "./skills.css"

export default function Skills() {
    return (
        <div className='skillsContainer'>
            <div className="skillsTitle"><h1> Professional Skills</h1></div>
            <div className="SkillsFlex">
                <div id='skill' className='skill2' title="Html"></div>
                <div id='skill' className='skill3' title="CSS"></div>
                <div id='skill' className='skill10' title="JavaScript"></div>
                <div id='skill' className='skill1' title="React"></div>
                <div id='skill' className='skill7' title="Node"></div>
                <div id='skill' className='skill5' title="MongoDB"></div>
                <div id='skill' className='skill6' title="Git"></div>
                <div id='skill' className='skill4' title="C++"></div>
                <div id='skill' className='skill9' title="MySQL"></div>
                <div id='skill' className='skill8' title="Java"></div>
            </div>
        </div>
    )
}
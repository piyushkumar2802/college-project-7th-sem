import React from 'react'
import Project from './Style/Our-project'

export default function OurProjext() {
    return (
            <fragments className="project">
                <Project />
            <h1 className="project-heading app-had">Our <span className="project-span">Projects</span> </h1>
            <p className="project-para app-had">With agile project management methodology, well-aligned process and seamless communication, we are able to deliver projects of varying complexities.</p>
            <ul className="project-div">
                <li className="project-div-li-w"><a href="/">Mobile</a></li>
                <li className="project-div-li-m"><a href="/">Web</a></li>
            </ul>
            <ul className="project-title">
                <li>Service</li>
                <li>pazi</li>
                <li>groupmeet</li>
                <li>dollor</li>
                <li>appbiz</li>
                <li>buddy</li>
            </ul>
        </fragments>
    )
}

import React from 'react'
import Project from './Style/Our-project'

export default function OurProjext() {
    return (
            <div className="project">
                <Project />
            <h1 className="project-heading app-had">Our <span className="project-span">Projects</span> </h1>
            <p className="project-para app-had">With agile project management methodology, well-aligned process and seamless communication, we are able to deliver projects of varying complexities.</p>
            <ul className="project-div">
                <li className="project-div-li-w"><a href="/">Mobile</a></li>
                <li className="project-div-li-m"><a href="/">Web</a></li>
            </ul>
            <ul className="project-title">
                <li><a href="/" className="project-title-a">HTML Learning</a></li>
                <li><a href="/" className="project-title-a">CSS Learning</a></li>
                <li><a href="/" className="project-title-a">JavaScript Learning</a></li>
                <li><a href="/" className="project-title-a">ToDo List</a></li>
                <li><a href="/" className="project-title-a">React Learning</a></li>
                <li><a href="/" className="project-title-a">E-commerce Project</a></li>
            </ul>
        </div>
    )
}

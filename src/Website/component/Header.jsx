import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// menu bar icon 
import { FaInbox,FaDelicious,FaSign,FaLock,FaTools,FaPhabricator,FaSearch } from "react-icons/fa";

// about fnt icon
// import { FaUser,FaHistory,FaMedium,FaBurn,  FaBook, FaBlog } from "react-icons/fa";


//service icon 
// import { FaCode,FaMobile,FaAccusoft,FaMap,FaCogs,FaDice } from "react-icons/fa";

// techonlogies font icon
// import { FaPython,FaPhp,FaDumpster,FaAngular,FaReact } from "react-icons/fa";
// import { FaAndroid,FaApple,FaReacteurope,FaSleigh } from "react-icons/fa";

import Header from "./Style/Header";


// import 'react-bootstrap/dist/react-bootstrap';

export default class Navbar extends Component {

  render() {
    return (
      <fragments className="hed-ing">
          <Header />
     {/*------------------- top nvbar -------------------------*/}
      <div className="top-nav-bar">
        <div className="search-box">
            <input type="text" class="form-control" />
            <span className="input-group-text"><FaSearch className="fontawesome fa-search" /></span>
        </div>

        <div class="menu-bar">
            <ul>
                <li>
                  <a href="/"> <FaInbox className="fontawesome" /> Home</a>
                </li>
                <li>
                  <a href="/"><FaDelicious className="fontawesome"/> AboutUs</a>
                </li>
                <li>
                  <a href="/"><FaTools className="fontawesome" /> Services</a>
                </li>

                <li>
                    <a href="/"><FaPhabricator className="fontawesome" /> Technology</a>
                </li>

                <li>
                    <a href="/"><FaSign className="fontawesome" /> SignUp</a>
                </li>

                <li>
                    <a href="/"><FaLock className="fontawesome" /> Log In</a>
                </li>
            </ul>
        </div>

    </div>
    {/*---------------------end top navbar--------------------- */}
    {/*--------------------- Hero navbar--------------------- */}
        {/* <section className="hero">
          <div className="container">
            <div className="row">
              <div className="had">
                <h3 className="had-item">Mobile App Testing on 100+ Real Devices</h3>
                <h1 className="had-item">Welcome to the New World : <span className="text-warning"> Mobile First</span></h1>
                <h6 className="had-item">A one-stop destination for all your app testing and QA needs!</h6>
                <button className="btn btn-warning btn-md text-white had-btn">Get start now</button>
              </div>
            </div>
          </div>
        </section> */}
    {/*---------------------end Hero navbar--------------------- */}

      </fragments>
    );
  }
}





          {/*
              <li>
                  <a href="/">About Us</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <p className="dropdown-had">About</p>
                  <hr />
                    <li><a className="dropdown-item" href="/"><FaUser className="fontawesome" /> Leadership Team</a></li>
                    <li><a className="dropdown-item" href="/"><FaHistory className="fontawesome" /> History</a></li>
                    <li><a className="dropdown-item" href="/"><FaBurn className="fontawesome" /> Clients</a></li>
                    <li><a className="dropdown-item" href="/"><FaMedium className="fontawesome" /> Media</a></li>
                    <li><a className="dropdown-item" href="/"><FaBook className="fontawesome" /> Privacy Policy</a></li>
                    <li><a className="dropdown-item" href="/"><FaLock className="fontawesome" /> Terms & Conditions</a></li>
                    <li><a className="dropdown-item" href="/"><FaBlog className="fontawesome" /> Blog</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <p className="dropdown-had">SERVICES</p>
                    <hr />
                    <li><a className="dropdown-item" href="/"><FaCode className="fontawesome" /> Web Application Development</a></li>
                    <li><a className="dropdown-item" href="/"><FaMobile className="fontawesome" /> Mobile Application Development</a></li>
                    <li><a className="dropdown-item" href="/"><FaMap className="fontawesome" /> Enterprise Maintenance</a></li>
                    <li><a className="dropdown-item" href="/"><FaTools className="fontawesome" /> Application Mintenance</a></li>
                    <li><a className="dropdown-item" href="/"><FaDelicious className="fontawesome" /> Dedicated Engagemnt</a></li>
                    <li><a className="dropdown-item" href="/"><FaAccusoft className="fontawesome" /> Quality Analysis</a></li>
                    <li><a className="dropdown-item" href="/"><FaCogs className="fontawesome" /> Custom Development</a></li>
                    <li><a className="dropdown-item" href="/"><FaDice className="fontawesome" /> Consulting Services</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Technologies
                  </a>
                  <ul className="dropdown-menu dropdown-col" aria-labelledby="navbarDropdownMenuLink">
                    <p className="dropdown-had">Web</p>
                    <hr />
                    <li><a className="dropdown-item" href="/"><FaPython className="fontawesome" /> Python</a></li>
                    <li><a className="dropdown-item" href="/"><FaPhp className="fontawesome" /> PHP</a></li>
                    <li><a className="dropdown-item" href="/"><FaAngular className="fontawesome" /> Angular</a></li>
                    <li><a className="dropdown-item" href="/"><FaReact className="fontawesome" /> React JS</a></li>
                    <br />
                    <p className="dropdown-had">MOBILE</p>
                    <hr />
                    <li><a className="dropdown-item" href="/"><FaAndroid className="fontawesome" /> Android</a></li>
                    <li><a className="dropdown-item" href="/"><FaApple className="fontawesome" /> ios</a></li>
                    <li><a className="dropdown-item" href="/"><FaReacteurope className="fontawesome" /> React-Native</a></li>
                    <li><a className="dropdown-item" href="/"><FaPhabricator className="fontawesome" /> Hybrid</a></li>
                    <li><a className="dropdown-item" href="/"><FaSleigh className="fontawesome" /> Xamarin</a></li>
                  </ul>
                </li>
*/}
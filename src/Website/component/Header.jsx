import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// menu bar icon 
import { FaInbox,FaDelicious,FaSign,FaLock,FaTools,FaPhabricator,FaSearch } from "react-icons/fa";
import Header from "./Style/Header";

export default class Navbar extends Component {

  render() {
    return (
      <div className="hed-ing">
          <Header />
     {/*------------------- top nvbar -------------------------*/}
      <div className="top-nav-bar">
        <div className="search-box">
            <input type="text" className="form-control" />
            <span className="input-group-text"><FaSearch className="fontawesome fa-search" /></span>
        </div>

        <div className="menu-bar">
            <ul>
                <li>
                  <a href="/"> <FaInbox className="fontawesome" /><br /> Home</a>
                </li>
                <li>
                  <a href="./App_testing_service.jsx"><FaDelicious className="fontawesome"/><br /> AboutUs</a>
                </li>
                <li>
                  <a href="./"><FaTools className="fontawesome" /><br /> Services</a>
                </li>

                <li>
                    <a href="/"><FaPhabricator className="fontawesome" /><br /> Technology</a>
                </li>

                <li>
                    <a href="/"><FaSign className="fontawesome" /><br /> SignUp</a>
                </li>

                <li>
                    <a href="/"><FaLock className="fontawesome" /><br /> LogIn</a>
                </li>
            </ul>
        </div>

    </div>
      </div>
    );
  }
}
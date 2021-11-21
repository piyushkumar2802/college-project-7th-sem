import React, { Fragment } from 'react';
import Logo1 from './../Image/logo-1.png';
import { FaList } from "react-icons/fa";
// import Headerback from "../Image/header/heades.webp";
// import { useState ,useEffect } from 'react';

function Header() {
    // const [color, setcolor] = useState(null);
    // const listenScrollEvent = (event) => {
    //     if (window.scrollY) {
    //       return setcolor("url("+{Headerback}+")")
    //     } else{
    //       return setcolor("red")
    //     } 
    //   }
      
    //   useEffect(() => {
    //     window.addEventListener('scroll', listenScrollEvent);
      
    //     return () =>
    //       window.removeEventListener('scroll', listenScrollEvent);
    //   });

    const Logo = {
        height: "auto",
        width: "auto"
    }
    
    return (
        <Fragment>
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src={Logo1} alt="" style={Logo} />
                    </a>
                    <p><b>भोपाल स्वास्थ्य सेवाएं<br />(Bhopal Health Services)</b></p>

                    <nav id="navbar" className="navbar">
                        <div className="container teal borderYtoX">
                            <ul>
                                <li><a className="nav-link  to" href="/">Home</a></li>
                                <li><a className="nav-link scrollto" href='/'>About</a></li>
                                <li><a className="nav-link scrollto" href="/">Services</a></li>
                                <li><a className="nav-link scrollto" href="/">Contact</a>
                                </li>
                                <li className="dropdown"><a href="/"><span>Hospital</span> <i
                                    className="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li className="dropdown"><a href="/"><span>Govermenmt Hospitals</span> </a></li>
                                        <li className="dropdown"><a href="/"><span>Private Hospitals</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                            <FaList className="mobile-nav-toggle" />
                            {/* <i className="bi bi-list "></i> */}
                        </div>
                    </nav>

                </div>
            </header>
        </Fragment>
    )
}

export default Header;


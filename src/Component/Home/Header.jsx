import React, { Fragment, useState } from 'react';
import Logo1 from './../Image/logo-1.png';
import { FaList } from "react-icons/fa";
import {
    Link,
    NavLink
} from 'react-router-dom';

function Header() {
    const Logo = {
        height: "auto",
        width: "auto"
    }
    const [showMediaIcon, setshowMediaIcon] = useState(false);

    return (
        <Fragment>
            {/* <Router> */}
                <header className="header fixed-top">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                        <a href="index.html" className="logo d-flex align-items-center">
                            <img src={Logo1} alt="" style={Logo} />
                        </a>
                        <p> <b style={{
                            color: "#eee"
                        }}>भोपाल स्वास्थ्य सेवाएं <br /> (Bhopal Health Services) </b> </p>

                        <nav id="navbar" className="navbar">
                            <div className={showMediaIcon ? "container teal borderYtoX navbar-mobile" : "container teal borderYtoX"}>
                                <ul>
                                    <li>
                                        <NavLink as={Link} exact to="/"><span>Home</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink as={Link} exact to="/about"><span>About</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink as={Link} to="/services"><span>Services</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink as={Link} to="/contact"><span>Contact</span></NavLink>
                                    </li>
                                    <li className="dropdown nomobile-component" style={{
                                        color: "#111",
                                        textdecoration: "none",
                                        font: "24px Raleway",
                                        margin: "0px 10px",
                                        padding: "10px 10px",
                                        position: "relative",
                                        zIndex: "0",
                                        cursor: "pointer",
                                        alignItems: "left"
                                    }}><span>Hospital</span>
                                        <ul>
                                            <li className="dropdown">
                                                <NavLink as={Link} to="/goverment"><span>Goverment Hospitals</span></NavLink>
                                            </li>
                                            <li className="dropdown">
                                                <NavLink as={Link} to="/private"><span>Private Hospitals</span></NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* mobile  */}
                                    <li className="mobile-component">
                                        <NavLink as={Link} to="/goverment"><span>Goverment Hospitals</span></NavLink>
                                    </li>
                                    <li className="mobile-component">
                                        <NavLink as={Link} to="/private"><span>Private Hospitals</span></NavLink>
                                    </li>
                                    {/* end mobile */}
                                </ul>
                                <FaList className="mobile-nav-toggle" style={{
                                    color: "green"
                                }} onClick={() => setshowMediaIcon(!showMediaIcon)} />

                            </div>
                        </nav>
                    </div>
                </header>
                
        </Fragment>
    )
}

export default Header;


import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from "./Style/Footer-s";
import logo from "./image/logo.png";
import {FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaArrowRight} from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                < Style />

                {/* -- ======= Footer ======= -- */}
                <footer className="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-4">

                            <div className="col-lg-12 col-md-12 footer-info">
                                    <a href="index.html" className="logo d-flex align-items-center">
                                        <img src={logo} alt="" />
                                        <span>WebEdu</span>
                                    </a>
                            </div>

                                <div className="col-lg-5 col-6 footer-links text-start">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Home</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">About us</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Services</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Technology</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Privacy policy</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-6 footer-links text-start">
                                    <h4>Our Services</h4>
                                    <ul >
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Web Design</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Web Development</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Product Management</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">full stack devloper</a></li>
                                        <li><FaArrowRight className="footer-icon" /> <a href="/">Graphic Design</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-12 footer-contact text-center">
                                    <h4>Contact Us</h4>
                                    <p>
                                        A-22A Bharat Nagar <br />
                                        Sachidanand Nagar 462023<br />
                                        Bhopal <br /><br />
                                        <strong>Phone:</strong> +91 9905532741<br />
                                        <strong>Email:</strong> rkc2802@gmail.com<br />
                                    </p>
                                </div>

                                    <div className="social-links mt-1 col-md-12 text-center">
                                        <a href="/" className="twitter"> <FaTwitter className="footer-icon-media" /></a>
                                        <a href="/" className="facebook"> <FaFacebook className="footer-icon-media" /></a>
                                        <a href="/" className="instagram"> <FaLinkedin className="footer-icon-media" /></a>
                                        <a href="/" className="linkedin"> <FaWhatsapp className="footer-icon-media" /></a>
                                    </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="container">
                                    <div className="copyright">
                                        &copy; Copyright <strong><span>WebEdu</span></strong>. All Rights Reserved
                                    </div>
                                    <div className="credits">
                                        Designed by <span className="creater">Piyush kumar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
           {/* -- End Footer -- */}
            </Fragment>
        )
    }
}

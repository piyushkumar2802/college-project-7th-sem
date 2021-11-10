import React, { Fragment } from 'react';
import FStyle from './Style/Footer-s';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from './Image/Logo.png';

class footer extends React.Component {
    render() {
        return (
            <Fragment>
                < FStyle />

                <footer className="footer-section">
                    <div className="container">
                        <div className="footer-cta pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>New Mahaveer Colony Beur Patna-2 <br /> 800002.</span>
                                            <br /><br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-phone"></i>
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>+91 8877964960 <br /> +91 7488469523</span>
                                            <br /><br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="far fa-envelope-open"></i>
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>murlikumarnit@gmail.com</span><br/>
                                            <span>murlimanohar96558@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget text-center">
                                        <div className="footer-logo">
                                            <a href="index.html"><img src={Logo} className="img-fluid" alt="logo" /></a>
                                        </div>
                                        <div className="footer-text">
                                            <p>Murli Construction</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span className="F-content">Follow us</span>
                                            <a href="/"><FaFacebook className="footer-logo" /></a>
                                            <a href="/"><FaTwitter className="footer-logo" /></a>
                                            <a href="/"><FaInstagram className="footer-logo" /></a>
                                            <a href="/"><FaWhatsapp className="footer-logo" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget ">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul className="text-start">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">About Us</a></li>
                                            <li><a href="/">Help Center</a></li>
                                            <li><a href="/">Terms & Service</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Office Location</h3>
                                        </div>
                                        <div className="footer-text mb-25 text-center">
                                            <p>map</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="copyright-text">
                            <p>&copy; All Right Reserved</p>
                        </div>
                    </div>
                </footer>


            </Fragment>
        )
    }
}
export default footer;

import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import CStyle from './Style/Contact-s';

class contect extends React.Component {
    render() {
        return (
            <Fragment>
                < CStyle />
                <div className="contact">
                    <section>

                        <div className="container aos-init aos-animate" data-aos="fade-up">

                            <header className="contact">
                                <p className="h-c">CONTECT US </p>
                            </header>

                            <div className="row gy-4">

                                <div className="col-lg-6">

                                    <div className="row gy-4">
                                        
                                        <div className="col-md-6">
                                            <div className="info-box">
                                            <FaPhoneAlt className="contact-icon" />
                                                <span>Call Us</span><br/><br/>
                                                <p>+91 7488469523</p>
                                                <p>+91 8877964960</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="info-box">
                                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                                <span>Mail Us</span><br/><br/>
                                                <p>murlimanohar96558@gmail.com</p>
                                                <p>murlikumarnit@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="info-box">
                                            <FaLocationArrow className="contact-icon" />
                                                <span>Address</span><br/><br/>
                                                <p>New Mahaveer Colony Beur , Patna-2
                                                    <br />
                                                    Bihar ,800002
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="info-box">
                                            <FaClock className="contact-icon" />
                                                <span>Open Hours</span><br /><br/><br/>
                                                <p>Monday - Sunday<br />10:00am - 6:00pm</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <form action="" method="post" className="php-email-form">
                                        <div className="row gy-4">

                                            <div className="col-md-6">
                                                <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                            </div>

                                            <div className="col-md-6 ">
                                                <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                            </div>

                                            <div className="col-md-12">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                            </div>

                                            <div className="col-md-12">
                                                <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                            </div>

                                            <div className="col-md-12 text-center">
                                                <div className="loading">Loading</div>
                                                <div className="error-message"></div>
                                                <div className="sent-message">Your message has been sent. Thank you!</div>

                                                <button type="submit">Send Message</button>
                                            </div>

                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </section>
                </div>
            </Fragment>
        );
    }
}
export default contect;
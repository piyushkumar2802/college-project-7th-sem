import React, { Fragment } from 'react';
import ShereImg from "../Image/footer-image.png";
// ./assets/img/footer-image.png"
function Footer() {
    return (
        <Fragment>
            <section class="footer">
                <div class="container text-center">
                    <div class="row">

                        {/* <!-- footer col-1  section ------------------------------------------------------------------------------> */}
                        <div class="col-md-3">
                            <h1>Useful Links</h1>
                            <p>
                                <a href="/">Home</a>
                            </p>

                            <p>
                                <a href="./component/About.html">About</a>
                            </p>

                            <p>
                                <a href="./component/services.html">Services</a>
                            </p>

                            <p>
                                <a href="./component/Contact.html">Contact</a>
                            </p>

                            <p>
                                <a href="./component/Govererment.html">Goverment</a>
                            </p>

                            <p>
                                <a href="./component/Private.html">Private</a>
                            </p>
                        </div>
                        {/* <!-- footer col-2  section ------------------------------------------------------------------------------> */}
                        <div class="col-md-3">
                            <h1>Follow Us</h1>

                            <p>
                                <i class="fab fa-youtube footer-logo"></i>
                                <a href="https://www.youtube.com/">You Tube</a>
                            </p>

                            <p>
                                <i class="fab fa-facebook footer-logo"></i>
                                <a href="https://www.facebook.com/">Facebook</a>
                            </p>

                            <p>
                                <i class="fab fa-linkedin footer-logo"></i>
                                <a href="https://www.linkedin.com/feed/"> LinkedIn</a>
                            </p>

                            <p>
                                <i class="fab fa-twitter-square footer-logo"></i>
                                <a href="https://twitter.com/?lang=en">Twitter</a>
                            </p>

                            <p>
                                <i class="fab fa-twitter-square footer-logo"></i>
                                <a href="https://www.instagram.com/">Instagram</a>
                            </p>
                        </div>
                        {/* <!-- footer col-3  section ------------------------------------------------------------------------------> */}
                        <div class="col-md-6 footer-image">
                            <h1>Download App</h1>
                            <a href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700058906718226_creativeid_480977734703_device_c&gclid=EAIaIQobChMIqbqf_MuU9AIVmx0rCh0dWQMEEAAYASAAEgICWPD_BwE&gclsrc=aw.ds">
                                <img src={ShereImg} alt="" />
                            </a>
                        </div>

                    </div>
                    <hr />
                    <h1 class ="copyright"> <i class ="fas fa-at"></i> &copy; Devloper | All Right Reserved</h1>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer;

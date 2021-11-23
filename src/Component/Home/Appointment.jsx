import React, { Fragment } from 'react';
import AppointmentImg from '../Image/appoinment.jpg';

function Appointment() {
    const AppointmentI = {
        marginTop: "6%" ,
        borderRadius: "10px"
    }
    return (
        <Fragment>
            <section id="contact" class="contact">

                <div class="container aos-init aos-animate" data-aos="fade-up">

                    <header class="section-header">
                        <p>Appintment</p>
                    </header>

                    <div class="row gy-4">

                        <div class="col-lg-6">
                            <img src={AppointmentImg} class="img-fluid" alt="" style={AppointmentI} />
                        </div>

                        <div class="col-lg-6">
                            <form action="http://government.crtd.in/crtddesign/forms/contact.php" method="post" class="php-email-form">
                                <div class="row gy-3">

                                    <div class="col-md-6">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div class="col-md-6">
                                        <input type="date" name="date" class="form-control" required="" placeholder="Date" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <input type="time" class="form-control" name="time" placeholder="Time" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="subject" placeholder="Your Problem" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <textarea class="form-control" name="message" rows="4" placeholder="Address" required=""></textarea>
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </section>
        </Fragment>
    )
}

export default Appointment;

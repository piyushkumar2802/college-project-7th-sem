import React from 'react'
import { Fragment } from 'react';
import Os1 from "../Image/ourServices/hospital.png";
import Os2 from "../Image/ourServices/operation.png";
import Os3 from "../Image/ourServices/blooddoner.png";

function OurServices() {
    const Mt25 = {
        marginTop: "25%"
    }
    const Mt15 = {
        marginTop: "15%"
    }
    return (
        <Fragment>
            <section id="values" className="values">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <p>Our Services would include</p>
                    </header>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="box" data-aos="fade-up" data-aos-delay="200">
                                <img src={Os1} className="img-fluid" alt="" />
                                <h3 style={Mt25}>Best Hospital</h3>
                                <p> Hospital stands for “house of sick people in trauma and labor” By Reuters Staff.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box" data-aos="fade-up" data-aos-delay="400">
                                <img src={Os2} className="img-fluid" alt="" />
                                <h3 style={Mt15}>Operations</h3>
                                <p>A process or series of acts involved in a particular form of work.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box" data-aos="fade-up" data-aos-delay="600">
                                <img src={Os3} className="img-fluid" alt="" />
                                <h3>Blood Donate</h3>
                                <p>Persons with the following conditions are not allowed to donate blood anyime.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </Fragment>
    )
}

export default OurServices;

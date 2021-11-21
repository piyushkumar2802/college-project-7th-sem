import React, { Fragment } from 'react';
import Covidupdate1 from "../Image/mask/Covid-1.jpg";
import Covidupdate2 from "../Image/mask/covid-2.png";
import Covidupdate3 from "../Image/mask/covid-3.png";

function CovidUpdate() {
    return (
        <Fragment>
            <section id="recent-blog-posts" className="recent-blog-posts">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <p>CORONAVIRUS UPDATES </p>
                    </header>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="post-box">
                                <div className="post-img">
                                    <img src={Covidupdate1} className="img-fluid" alt="" />
                                </div>
                                <span className="post-date">Details of Coronavirus</span>
                                <h3 className="post-title">What should I Do If After Coronavirus.</h3>
                                <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i
                                    className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="post-box">
                                <div className="post-img">
                                    <img src={Covidupdate2} className="img-fluid" alt="" />
                                </div>
                                <span className="post-date">Guidelines</span>
                                <h3 className="post-title">Covid-19 (CORONAVIRUS) Visitors' Guidelines</h3>
                                <a href="https://ncdc.gov.in/index1.php?lang=1&level=1&sublinkid=703&lid=550" className="readmore stretched-link mt-auto"><span>Read More</span><i
                                    className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="post-box">
                                <div className="post-img">
                                    <img src={Covidupdate3} className="img-fluid" alt="" />
                                </div>
                                <span className="post-date">Vaccine Scams</span>
                                <h3 className="post-title">Vaccination Ensured , Life Sequred</h3>
                                <a href="https://www.cowin.gov.in/" className="readmore stretched-link mt-auto"><span>Read More</span><i
                                    className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </Fragment>
    )
}

export default CovidUpdate;

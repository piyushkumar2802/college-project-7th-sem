import React, { Component, Fragment } from 'react';
import Header from './Home/Header';
import Style from "./Home/Style/SHeader";
import Footer from './Home/Footer';
import Sfooter from './Home/Style/SFooter';
import Services1 from './Image/services/services-1.jpg';
import Services2 from './Image/services/services-2.jpg';
import Services3 from './Image/services/services-3.jpg';
import Services4 from './Image/services/services-4.jpg';
import Services5 from './Image/services/services-5.jpg';
import Services6 from './Image/services/services-6.jpg';
import Services7 from './Image/services/services-7.jpg';
import Services8 from './Image/services/services-8.jpg';
import Services9 from './Image/services/services-9.jpg';
import Services10 from './Image/services/services-10.jpg';
import Services11 from './Image/services/services-11.jpg';
import Services12 from './Image/services/services-12.jpg';
import Sservices from './Style/Sservices';

export default class Services extends Component {
    render() {
        return (
            <Fragment>
                < Style />
                < Header />

                {/* <!-- ====================Services section======================== --> */}
                < Sservices />
                <div className="services-content-div">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 company">
                                <h3>
                                    Our Services would include:
                                </h3>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12" id="our-services-include-div">

                                <h4>
                                    1. Market Feasibility Studies to help you geta better understanding of:
                                </h4>
                                <ul className="services-ul">
                                    <li>
                                        Existing medical facilities available in the Primary &amp; Secondary catchment areas of your
                                        Hospital.
                                    </li>
                                    <li>
                                        Need gaps if any in the existing medical facilities which the new hospital can help fulfil
                                    </li>
                                    <li>
                                        Opinion of Healthcare Practitioners in the area on the need and the set of specialities that
                                        would work
                                        given the needs.
                                    </li>
                                    <li>
                                        Modalities the new hospital should adopt which will potentially attract patients from nearby
                                        areas in
                                        the State
                                    </li>
                                </ul>
                                <h4>
                                    2. Detailed Project Report (DPR), to provide you :
                                </h4>

                                <ul className="services-ul">
                                    <li>
                                        Cost of the Project - Land, Building, Equipment &amp; Services.
                                    </li>
                                    <li>
                                        Cost of running the Hospital - Cost of Operations.
                                    </li>
                                    <li>
                                        Breakeven Levels of Operation for achieving Profitability?
                                    </li>
                                    <li>
                                        Profit &amp; Loss and Cash Flow Projections over a 10-year period
                                    </li>
                                </ul>
                                <h4>
                                    3. Equipment Planning, Procurement, Installation &amp; Commissioning.
                                </h4>

                                <ul className="services-ul">
                                    <li>
                                        Developing full list of Equipment, along with the Budget
                                    </li>
                                    <li>
                                        Selecting right equipment based on price, end user requirements, upgradeability,
                                        availability of
                                        technical support, accessories and spare parts
                                    </li>
                                    <li>
                                        Procurement support, including tender documents
                                    </li>
                                    <li>
                                        Preparing the layout of final equipment &amp;space requirements
                                    </li>

                                    <li>
                                        Installation &amp; Commissioning Support
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-12 company">
                                <h3>Support</h3>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <img src={Services1} className="img-responsive"
                                    alt="Hospitals Project Feasibility Study" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services2} className="img-responsive"
                                    alt="Market Surveys Project Feasibility Studies" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services3} className="img-responsive"
                                    alt="Feasibility Study for Medical Centers" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services4} className="img-responsive"
                                    alt="Hospital Equipment Planning" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services5} className="img-responsive" alt="Hospital Planners" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services6} className="img-responsive"
                                    alt="Medical Equipment Consultants" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services7} className="img-responsive"
                                    alt="Medical Equipment Planning and Procurement" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services8} className="img-responsive"
                                    alt="Green Hospital Design" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services9} className="img-responsive"
                                    alt="Green Hospital Design" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services10} className="img-responsive"
                                    alt="Lean &amp; Smart Hospitals" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services11} className="img-responsive"
                                    alt="Designing Hospitals to be Patient Friendly" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={Services12} className="img-responsive"
                                    alt="End to End - Turnkey Solutions" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====================end Services section======================== --> */}
                < Footer />
                < Sfooter />
            </Fragment>
        )
    }
}

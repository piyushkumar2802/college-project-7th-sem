import React, { Fragment } from 'react';
import Slider1 from '../Image/header/health1.jpg';
import Slider2 from '../Image/header/header-1.jpg';
import Slider3 from '../Image/header/header-2.jpg';
import Slider4 from '../Image/header/header-3.webp';
import Background from "../Image/header/pngwing8.png"

function Hero() {
    const slidercontent = {
        textalign: "center"
    }
    const sliderpara = {
        fontsize: "16px"
    }
    const sliderimage3 = {
        height: "400px"
    }
    return (
        <Fragment>

            <section id="hero" className="hero d-flex align-items-center">
                <img src={Background} alt="" style={{
                    width:"100%"
                }}/>

                <div id="slider" >
                    <div className="slides">

                        <div className="slider">
                            <div className="slider1">
                                <div className="content-txt">
                                    <h1 style={slidercontent}>Doctors</h1>
                                    <p style={sliderpara}>Best Doctor Provided in The World.</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={Slider1} alt="" />
                            </div>
                        </div>

                        <div className="slider">
                            <div className="slider1">
                                <div className="content-txt">
                                    <h1 style={slidercontent}>Cleaning</h1>
                                    <p style={sliderpara}>Clean in 24 Hover and Sanitary.</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={Slider2} alt="" />
                            </div>
                        </div>

                        <div className="slider">
                            <div className="slider1">
                                <div className="content-txt">
                                    <h1 style={slidercontent}>Hospitals</h1>
                                    <p style={sliderpara}>provides to the best Hospitals on all over india.</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={Slider3} style={sliderimage3} alt="" />
                            </div>
                        </div>

                        <div className="slider">
                            <div className="slider1">
                                <div className="content-txt">
                                    <h1 style={slidercontent}>Services</h1>
                                    <p style={sliderpara}>Best checkup in Smart Machines.</p>
                                </div>
                            </div>
                            <div className="image">
                                <img src={Slider4} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment >
    )
}

export default Hero;

import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Services from "./Style/Advance-services";
import Slider1 from './image/slider-1.jpg';
import Slider2 from './image/slider-2.jpg';
import Slider3 from './image/slider-3.jpg';
import Slider4 from './image/slider-4.jpg';

export default class Advanced_Services extends Component {
    render() {
        return (
            <fragments>
                < Services />
                {/*-- slider section ---------------------------------------------------------------------------------------------*/}
                <div className ="slider">
                    <div id="carouselExampleIndicators" className ="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div className ="carousel-inner">
                            <div className ="carousel-item active" data-bs-interval="5000">
                                <img src={Slider1} className ="d-block w-100" alt="..." />
                            </div>
                            <div className ="carousel-item" data-bs-interval="5000">
                                <img src={Slider2} className ="d-block w-100" alt="..." />
                            </div>
                            <div className ="carousel-item" data-bs-interval="5000">
                                <img src={Slider3} className ="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                                <img src={Slider4} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                {/*-- end slider section --------------------------------------------------------------------------------*/}

                {/* <div className="adv-head">
                    <h2 className="adv-h">Advanced Services For Smarter Solutions</h2>
                    <p className="adv-h">Taking care of every aspect of mobile solutions – from app development & 
                        testing to deployment and beyond …</p>
                </div>
                <div className="adv-block">block</div> */}
            </fragments>
        )
    }
}

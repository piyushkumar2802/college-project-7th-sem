import React from 'react'
import { Fragment } from 'react';
import AboutI from '../Image/services/services-9.jpg';

function Content() {
  return (
    <Fragment>
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">

          <div className="container">
            <div className="row gx-0" data-aos="fade-up">

              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={AboutI} className="img-fluid" alt="" />
              </div>


              <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos-delay="200">
                <div className="content">
                  <h3>Welcome to</h3>
                  <h2>Center Research Technology & Development.</h2>
                  <p>
                    CRTD as noted above, an essential purpose of this volume is to expand on the original version of How
                    People
                    Learn by exploring how the findings of research on learning can be incorporated into classNameroom practice.
                  </p>
                  <div className="text-center text-lg-start">
                    <a href="/"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
          
            </div>
          </div>

        </section>
        {/* <!-- ======= About Section ======= --> */}
      </main>
    </Fragment>
  )
}

export default Content;

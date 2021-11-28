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
                  <h2>Bhopal Health & Services.</h2>
                  <p>
                    BHS (Bhopal Health Services) - It provides information about all the hospitals of Bhopal and the name of all the hospitals,
                     contact numbers and appointments and provide all the information.
                     <br /><br />
                  You can find information about all the information, services, Contact and Adressses of
                     all government hospitals and private hospitals in Bhopal.</p>
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

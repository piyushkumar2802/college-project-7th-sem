import React, { Fragment } from 'react';

// header
import SHeader from './Home/Style/SHeader';
import Header from './Home/Header.jsx';

// hero
import SHero from './Home/Style/SHero';
import Hero from './Home/Hero';

// About 
import HAbout from "./Home/Content";
import SAbout from "./Home/Style/SHAbout";

// Our Services 
import OurServices from "./Home/OurServices";
import SOurServices from "./Home/Style/SOurServices";

// Covid Update
import CovidUpdate from "./Home/CovidUpdate";
import SCovidUpdate from "./Home/Style/SCovidUpdate";

// Appoinment
import Appointment from "./Home/Appointment";
import SAppointment from "./Home/Style/SAppointmet";

// Footer
import Footer from "./Home/Footer";
import SFooter from "./Home/Style/SFooter";

function Home() {
    return (
        <Fragment>
            {/* Header */}
                < SHeader />
                < Header />

            {/* Hero */}
                < SHero />
                < Hero />

            {/* Home/About */}
                < HAbout />
                < SAbout />

            {/* OurServices */}
                < OurServices />
                < SOurServices />

            {/* covid Update */}
                < CovidUpdate />
                < SCovidUpdate />

            {/* Appointment */}
                < Appointment />
                < SAppointment />
            {/* Footer */}
                < Footer />
                < SFooter />
        </Fragment>
    )
}

export default Home;

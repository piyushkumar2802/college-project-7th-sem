import React, { Fragment } from 'react';
import GlobleStyle from './GlobleStyle';
import Navbar from './components/Navbar';
import Slider from './components/slider';
import About from './components/About';
import Started from './components/Started';
import Services from './components/Services';
import Quality from './components/Quality';
import Clients from './components/Clients';
import Contect from './components/contect';
import Footer from './components/footer';

const Home = () => {


    return (
        <Fragment>
            <GlobleStyle />
            <Navbar />
             <Slider />
            <About />
            <Started />
            <Services />
            <Quality />
            <Clients />
            <Contect />
            <Footer />
        </Fragment>
    )
}
export default Home;
import React, { Component } from 'react';
import Header from './Home/Header';
import Style from "./Home/Style/SHeader";
import Footer from './Home/Footer';
import Sfooter from './Home/Style/SFooter';

export default class About extends Component {
    render() {
        return (
            <div>
                < Style />
                < Header />
                about 
                < Footer />
                < Sfooter />
            </div>
        )
    }
}

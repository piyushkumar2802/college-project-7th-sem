import React from 'react'
import GlobleStyle from './GlobleStyle';
import Header from './component/Header';
import Advanced from './component/Advanced_Services';
import AppTesting from './component/App_testing_service';
import Project from './component/OurProjext';


export default function home() {
    return (
        <div> 
            <GlobleStyle />
            <Header />
            <Advanced />
            <AppTesting />
            <Project />

        </div>
    )
}

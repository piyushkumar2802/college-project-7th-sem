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
                {/* About Section */}
                <div className="wrapper bodyWrapper" style={{
                    marginTop:"10%"
                }}>
                    <div className="container ">

                        <div id="SkipContent" tabindex="-1"></div>
                        <div className="row" id="row-content">
                            <div className="col-12">

                                <h1 style={{
                                    fontSize:"24px"
                                }}>About</h1>
                                <div id="post-1532" className="post-1532 page type-page status-publish hentry" style={{
                                    textAlign:" initial"
                                }}>
                                    <p>Under the Madhya Pradesh Restoration of Commissioners Ordinance, 1956 (V) divisions were
                                        created in the state. Government of Madhya Pradesh, Revenue department published the
                                        Gazette notification on 1st November, 1956 to constitute this division. The headquarters
                                        of this division was set at Bhopal.<br /><br />
                                        There were 7 districts in Bhopal division, including Hoshangabad and Betul district in
                                        addition to Betul district and Sehore, Vidisha, Raisen, Rajgarh, Shajapur, Hoshangabad
                                        and Betul.Bhopal did not have the status of the district at that time and the present
                                        area of Bhopal district was under Sehore district.</p>
                                    <p>Revenue Department’s notification number 3870-seven-in-one dated December 13, 1971,
                                        changed the boundaries of Bhopal division and excluded the entire district of
                                        Hoshangabad and created Hoshangabad division from the date of publication of the
                                        notification. After the formation of Hoshangabad division, 6 districts remained in
                                        Bhopal division.</p>
                                    <p>The Revenue Department created Bhopal district from October 2, 1972 by excluding the
                                        boundaries of Tehsil Huzur and Tehsil Berasia from Sehore district. In this way, 7
                                        districts were again formed in the division.</p>
                                    <p>In the year 1976, the boundaries of Shajapur district were excluded from Bhopal division
                                        and this district was included in Ujjain division. As a result, there were 6 districts
                                        in Bhopal division. In these districts, the boundaries of District Betul came from the
                                        state of Maharashtra and the boundaries of District Rajgarh came from Rajasthan
                                        province.</p>
                                    <p>Madhya Pradesh Government, Revenue Department’s notification number F-1-12-08-seven-SH-6
                                        dated 26 August 2008, the boundaries of Bhopal division were changed again and the
                                        districts included in Hoshangabad division besides Hoshangabad and Harda Bhopal division
                                        The new Narmadapuram division was created, covering Hoshangabad, Harda and Betul
                                        districts, with the headquarters of Hoshangabad, excluding the boundaries of the entire
                                        district Betul.<br /><br />
                                        After the division of the government from time to time, presently Bhopal division
                                        consists of 5 districts – Bhopal, Raisen, Rajgarh, Sehore, and Vidisha.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Section */}
                < Footer />
                < Sfooter />
            </div>
        )
    }
}

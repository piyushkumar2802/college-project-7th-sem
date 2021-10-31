import React from 'react';

import { FaCrow, FaEdit, FaTruck } from "react-icons/fa";
import Testing from './Style/app-testing';


export default function App_testing_service() {
    return (
        <div>
            <Testing />
             {/* -------------app testing service section-------------------------  */}
            <div className="testing">
                <h2 className="app-had">App Testing Services We Offer</h2>
                <p className="app-had app_had_content">Our Specialized Mobile app testing and quality ssurance services include:</p>
                <ul className="text-ul">
                    <li className="app_text"><span className="app-text-span">Usability Testing</span></li>
                    <li className="app_text"><span className="app-text-span">Compliance Testing</span></li>
                    <li className="app_text"><span className="app-text-span">Functionl Testing</span></li>
                    <li className="app_text"><span className="app-text-span">Performance Texting</span></li>
                    <li className="app_text"><span className="app-text-span">Security testing</span></li>
                    <li className="app_text"><span className="app-text-span">Automation testing</span></li>
                </ul>            
            </div>

            {/* SEO/ SMO and Paid Marketing */}
            <div className="seo_mark">
                <h2 className="app-had">SEO/ SMO and Paid Marketing</h2>
                <p className="app-had app_had_content">Take your business to new heights with our advanced digital marketing solutions! <br /> Our effective digital 
                    marketing services take your products to your potential customers through the right <br /> channels so you can
                     generate a high return-on-investment, improving your brand reputation & lead conversion rate.</p>
                     <div className ="app-had">
                        <a className="btn btn-danger seo-btn" href="/">know more</a>     
                    </div>
            </div>
            {/* testing footer section */}
            <div className="testing-footer">
                <ul className="testing-footer-ul">
                    <li className="testing-footer-ul-li"><FaTruck className="texting-footer-icon" /> On Time Delivery</li>
                    <li className="testing-footer-ul-li texting-f-ul"><FaEdit className="texting-footer-icon" /> Non-Disclosure Agreement</li>
                    <li className="testing-footer-ul-li"><FaCrow className="texting-footer-icon" /> Better ROI</li>
                </ul>
            </div>

        </div>
        )
}

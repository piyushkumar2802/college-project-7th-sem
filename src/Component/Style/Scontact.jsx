import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
 /*--------------------------------------------------------------
           # About image
        --------------------------------------------------------------*/
        .btn-primary {
            background-color: #ec6516;
        }

        .btn-warning {
            background-color: #ffbb2a;
        }

        .btn-success {
            background-color: #33bb7d;
        }

        .btn-danger {
            background-color: #ee5722;
        }

        .text-primary {
            color: #03A9F5;
        }

        .text-warning {
            color: #ffbb2a;
        }

        .text-success {
            color: #33bb7d;
        }

        .text-danger {
            color: #ee5722;
        }

        .alert-info {
            background-color: #03A9F5;
            color: white;
        }

        .alert-warning {
            background-color: #ffbb2a;
            color: white;
        }

        .alert-success {
            background-color: #33bb7d;
            color: white;
        }

        .alert-danger {
            background-color: #ee5722;
            color: white;
        }

        #alertmessage2 h1 {
            font-size: 40px;
        }

        #alertmessage2 h2 {
            font-size: 35px;
        }

        #alertmessage2 h3 {
            font-size: 30px;
        }

        #alertmessage2 h4 {
            font-size: 25px;
        }

        #alertmessage2 h5 {
            font-size: 20px;
        }

        #alertmessage2 h6 {
            font-size: 18px;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
            color: #0E4971;
            font-weight: bold;
            text-align: initial;
        }

        p {
            text-align: initial;
        }

        .btn-danger:hover {
            color: #fff;
            background-color: #fe5722;
            border-color: #fe5722;
        }

        .btn-danger:active {
            color: #fff;
            background-color: #fe5722 !important;
            border-color: #fe5722;
        }

        .btn-primary:active {
            color: #fff;
            background-color: #03A9F5 !important;
            border-color: #03A9F5;
        }

        .btn-danger:focus {
            color: #fff;
            background-color: #fe5722;
            border-color: #fe5722;
        }

        .customNavigation a {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .prev,
        .next1 {
            color: white;
            background-color: #ffb400;
            padding: 5px 15px;
        }

        .customNavigation {
            text-align: right;
            margin: -80px 0 61px;
        }

        .prev:hover {
            background-color: #ec6516;
            color: white;
        }

        .next1:hover {
            background-color: #ec6516;
            color: white;
        }

        .default,
        .preview2 {
            display: none;
        }


        .broucher-btn a {
            color: #fff;
            font-size: 20px;
            text-align: center;
            background-color: #ec6616;
            padding: 14px 30px;
        }

        #address h2 {
            padding-left: 0px;
        }

        #address ul {
            padding-left: 0px;
        }

        #fotter-about p {
            color: #a8b0b9;
        }

        .news-letter h2 {
            margin: 0px 0px 30px 0px;
            color: #fff;
        }

        .news-letter p {
            padding: 10px 0px;
        }

        .news-letter {
            padding: 50px 0px;
        }

        .banner-round {
            margin-top: -200px;
        }

        .navbar-collapse .navbar-nav li:hover>.dropdown-menu {
            display: block;
        }

        .map-div {
            padding: 50px 0px;
        }

        .nabet-div {
            margin: 20px 0px;
        }

        .footer-links ul li .footer-info a {
            color: #fff !important;
        }

        .social {
            float: left;
            margin-top: 13px;
        }

        .broucher-btn {
            color: #0a0a0a;
            font-size: 15px;
            padding: 7px 10px 7px 15px;
            background-color: #ffb400;
            font-weight: 600;

        }

        .broucher-btn::before {
            background-color: #ec6417;
        }

        .broucher-link {
            overflow: hidden;
        }

        .footer-links-ul li {
            position: relative;
        }

        .footer-links-ul li::before {
            position: absolute;
            content: "\f111";
            top: 0px;
            left: -20px;
            font-size: 5px;
            font-family: "FontAwesome"

        }

        .nabh-consultants {
            padding: 20px 0px 40px 0px;
            overflow: hidden;
        }

        .nabh-consultants-div p {
            text-align: justify;
            padding: 0px 0px 15px 0px;
            font-style: normal;
        }

        #nabh-title {
            background: url(../images/icons/h2-lineb.png) center bottom no-repeat;
            text-align: center;
            font-size: 25px;
            padding-bottom: 15px;
            margin-bottom: 35px;
            color: #ec6417;
        }

        #testimonials-title {
            background: url(../images/icons/h2-lineb.png) center bottom no-repeat;
            text-align: center;
            font-size: 32px;
            padding-bottom: 15px;
            margin-bottom: 35px;
            color: #ec6417;
        }

        .about-content {
            padding: 50px 0px;
            overflow: hidden;
        }

        .about-content h3 {
            color: #ec6516;
        }

        .the-company .company {
            margin: 50px 0px;
        }

        .services-content-div .company h3 {
            color: #ec6516;
            padding-bottom: 10px;
        }

        .services-ul {
            margin-bottom: 20px;
        }

        .services-ul li {
            list-style: disc;
            padding-bottom: 8px;
        }

        .services-content-div p {
            padding-bottom: 20px;
        }

        .services-content-div {
            padding: 50px 0px;
        }

        .the-company .company h3 {
            color: #ec6516;
            padding-bottom: 10px;
        }

        .the-company .company p {
            padding-bottom: 20px;
        }

        .accreditations {
            padding: 50px 0px;
        }

        .accreditations p {
            text-align: center;
            padding: 15px 0px 30px 0px;
        }

        .accreditations h3 {
            color: #ec6516;
            text-align: center;
            padding-bottom: 35px;
        }

        #contact5 h4 {
            font-size: 15px;
            color: #698591;
            margin: 7px 0px;
        }

        #contact5 h4 span {
            font-weight: 400;
        }

        .address-box {
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }

        .address-box h2 {
            font-size: 20px;
            margin: 0px;
            padding: 10px 20px;
            background-color: #ccc;
            color: #555;
        }

        .address-box-cont {
            padding: 11px 20px;
        }

        .services-img-div img {
            width: 100%;
        }

        .services-box {
            padding: 20px 12px;
            background-color: #fff;
            box-shadow: 3px 3px 26px #ccc;
        }

        @-moz-document url-prefix() {
            .services-box {
                min-height: 230px;
            }
        }

        .project-section {
            padding: 60px 0px;
        }

        .project-section .project-wrap .slide {
            padding: 5px;
            overflow: hidden;
        }

        .team-div .project-wrap .slide {
            padding: 5px;
        }

        .team-div {
            padding: 50px 0px;
            background-color: #F1F1F1;
        }

        .team-div .project-wrap .link-box {
            text-align: left;
            color: #e94b06;
            font-size: 16px;
            font-weight: 600;
        }

        .team-div .project-wrap .link-box b {
            color: #000;
            display: block;
            font-size: 16px;
            font-weight: 600;
        }


        .team-div .project-wrap .link-box span {
            color: #072643;
            font-size: 14px;
        }

        .project-section .project-wrap img {
            border: 1px solid #f1f1f1;
            position: relative;
        }

        .project-section .project-wrap .overlay-img {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: rgba(11, 21, 32, 0.9);
            text-align: center;
            transition: all .5s;
            -webkit-transition: all .5s;
            opacity: 0;
            margin: 5px;

        }

        .project-section .project-wrap .overlay-img:after {
            content: '';
            width: 90%;
            height: 90%;
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: absolute;
            top: 5%;
            left: 5%;
        }

        .project-section .project-wrap .slide:hover>.overlay-img {
            opacity: 1;
            margin: 5px;
        }

        .project-section .project-wrap .slide .link-box {
            display: none !important;
        }

        .project-section .project-wrap .overlay-img h4 {
            position: absolute;
            left: 50%;
            width: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: 0px;
            color: #fff;
        }

        .team-div .project-wrap img {
            filter: gray;
            -webkit-filter: grayscale(1);
            border-radius: 50% 50% 50% 0px;
        }

        .team-div .project-wrap img:hover {
            filter: none;
            -webkit-filter: grayscale(0);
        }

        .project-section .project-wrap .link-box:hover>a {
            color: #fff !important;
        }

        .project-section .project-wrap .slide:hover .link-box a {
            color: #fff !important;
        }

        .broucher-sub-btn {
            margin: 10px 0px;
        }

        .broucher-sub-btn a {
            color: #F30000;
            font-size: 20px;
            line-height: 35px;
            font-weight: 600;
        }

        .broucher-sub-btn a img {
            margin-right: 10px;
        }

        .broucher-sub-btn a:hover {
            text-decoration: underline !important;
        }

        #our-services-include-div h3 {
            margin: 35px 0px 30px 0px;
        }

        .services-ul ul li {
            list-style: square;
        }

        .clients-list-ul li {
            list-style: square;
        }

        .clients-list-ul li p {
            margin: 10px;
        }

        .event-div {
            padding-top: 100px;
        }

        .events-content {
            background-color: #fff;
            margin-bottom: 40px;
        }

        .events-content img {
            width: 100%;
        }

        .events-content h3 {
            margin-top: 0px;
            font-size: 22px;
        }

        .events-content p {
            margin-bottom: 0px;
            font-weight: 600;
        }

        .events-sub-cont .event-date .fa {
            padding-right: 10px;
        }

        .events-sub-cont {
            padding: 25px 30px;
            border-bottom: 5px solid #ffb400;
            border-radius: 0px 0px 4px 5px;
            height: 175px !important;
        }

        .events-sub-cont1 {
            padding: 05px 10px;
            border-bottom: 5px solid #ffb400;
            border-radius: 0px 0px 4px 5px;
            height: 160px !important;
        }

        .top-margin {
            margin-top: 0px;
        }

        .our-team .our-team-wrap .slide-team {
            width: 20%;
            float: left;
            padding: 0px 10px;
        }

        .our-team .our-team-wrap .slide-team img {
            filter: gray;
            -webkit-filter: grayscale(1);
            border-radius: 50% 50% 50% 0px;
        }

        .our-team .our-team-wrap .slide-team img:hover {
            filter: none;
            -webkit-filter: grayscale(0);
        }

        .our-team .our-team-wrap .slide-team .link-box2 {
            text-align: left;
            color: #e94b06;
            font-size: 17px;
            font-weight: 600;
            line-height: 24px;
        }

        .our-team .our-team-wrap .slide-team .link-box2 span {
            color: #072643;
            font-size: 16px;
            font-weight: 500;
        }

        .our-team .our-team-wrap .slide-team .slide-inner {
            box-shadow: none;
        }

        .our-team .our-team-wrap .slide-team .link-box2 b {
            color: #000;
            display: block;
            font-size: 16px;
            font-weight: 600;
            padding-bottom: 10px;
        }

        .our-team .our-team-wrap .slide-team .link-box2 {
            padding: 5px;
        }

        .banner-img-div img {
            width: 100%;
            margin-top: -116px;
        }

        .services-img-div img {
            width: 100%;
        }

        .fixed-icon-bar {
            position: fixed;
            top: 50%;
            right: 0px;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            z-index: 999;
            transform: rotate(90deg);
            right: -54px;

        }

        .fixed-icon-bar a {
            display: block;
            text-align: center;
            transition: all 0.3s ease;
            color: white;
            font-size: 20px;
        }

        .content {
            margin-left: 75px;
            font-size: 30px;

        }

        .banner-img-div img {
            position: relative;
        }

        .banner-content {
            position: absolute;
            top: 65%;
            transform: translateY(-65%);

        }

        .banner-content h2 {
            color: #fff;
            font-size: 35px;
            font-family: roboto, sans-serif;
        }

        .banner-content p {
            color: #fff;
            overflow: hidden;
            max-width: 900px;
            font-size: 19px;
            font-family: roboto, sans-serif;
            font-weight: 350;
            padding: 10px 0px 10px 0px;
            line-height: 35px;
        }

        .banner-content a {
            transition: all 0.2s ease-out 0s;
            min-height: 0px;
            min-width: 0px;
            line-height: 26px;
            border-width: 0px;
            margin: 0px;
            padding: 8px 20px;
            letter-spacing: 0px;
            font-size: 18px;
        }

        .mobile-logo {
            display: none;
        }

        .demo-box1 h4 {
            padding: 10px;
            background: #3e3d3d;
            color: #fff;
            text-align: center;
            margin: 0px;
        }

        .demo-box2 {
            background: #000;
            color: #fff;
            overflow: hidden;
            text-align: center;
        }

        .demo-box2 .fa {
            padding: 20px;
            background-color: orange;
            color: #fff;
            float: right;
        }

        .mobile-view-br {
            display: none;
        }

        .map-div.mobile {
            display: none;
        }

        .map-div.desktop {
            display: block;
        }

        .banner-phara-inner ul {
            float: left;
            padding-right: 100px;
            margin-right: 100px;
            border-right: 2px solid #fff;
        }

        .banner-phara-inner ul:last-child {
            padding-right: 0px;
            margin-right: 0px;
            border-right: 0px solid #fff;
        }

        .banner-phara-inner ul li {
            z-index: 5;
            max-width: inherit;
            max-height: inherit;
            white-space: nowrap;
            color: #ffffff;
            font-family: roboto, sans-serif;
            font-weight: 300;
            font-size: 25px;
            line-height: 35px;

        }

        .footer-phone-number {
            display: none;
        }

        .footer-phone-cont p {
            font-size: 16px !important;
            color: #fff;
            text-align: center;
        }

        .clients-list-ul li p {
            text-align: left;
        }

        .career-content p {
            text-align: left;
        }

        .services-box-main .services-box .business2 .read-more-p {
            text-align: center;
            color: #fff;
        }

        .services-box-main .services-box .business2 .read-more-p .fa {
            color: #fff;
            font-size: 13px;
        }

        .body {
            font-family: 'Karla', sans-serif;
            line-height: 26px;
            color: #698591;
            font-size: 15px;
        }

        .bodydiv {
            background-color: #f6f6f6;
            padding-top: 12%;
        }

        @media (max-width: 960px) {
            .bodydiv {
                padding-top: 15%;
            }
        }

        @media (max-width: 720px) {
            .bodydiv {
                padding-top: 20%;
            }
        }

        @media (max-width: 480px) {
            .bodydiv {
                padding-top: 30%;
            }
        }
`;
export default GlobleStyle;
import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
/*--------------------------------------------------------------
            # services image
        --------------------------------------------------------------*/
        .services-content-div .company h3 {
            color: #ec6516;
            padding-bottom: 10px;
            text-align: left;
            font-size: 24px;
        }

        .company-more {
            font-size: 25px;
            color: #698591;
            text-align: left;
        }

        .services-content-div {
            padding: 50px 0px;
            margin-top: 6%;
        }

        .services-content-div h4 {
            text-align: left;
            color: #0E4971;
            font-weight: bold;
            font-size: 18px;
        }

        .services-ul {
            margin-bottom: 20px;
            text-align: left;
        }

        .services-ul li {
            list-style: disc;
            padding-bottom: 8px;
            text-align: left;
            color: #072643;
            font-size: 14px;
            margin-left: 50px;
        }

        .img-responsive,
        .thumbnail>img,
        .thumbnail a>img,
        .carousel-inner>.item>img,
        .carousel-inner>.item>a>img {
            display: block;
            max-width: 100%;
            height: auto;
        }

        @media (max-width: 991px) {
            .services-content-div {
                margin-top: 18%;
            }
            .bodyWrapper{
                margin-top: 30% !important;
            }
        }
`;
export default GlobleStyle;
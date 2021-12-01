import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
/*--------------------------------------------------------------
           # About image
        --------------------------------------------------------------*/

        a:hover {
            color: #008f60;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: Tahoma, Geneva, sans-serif;
            font-weight: normal;
            margin: 0;
            padding: 0;
            margin-bottom: 15px;
        }

        h1 {
            font-size: 24px;
        }

        h2 {
            font-size: 22px;
        }

        h3 {
            font-size: 20px;
        }

        h4 {
            font-size: 18px;
        }

        h5 {
            font-size: 16px;
        }

        h6 {
            font-size: 14px;
        }

        .fleft {
            float: left;
            display: inline;
        }

        .fright {
            float: right;
            display: inline;
        }

        .clear {
            clear: both;
            line-height: 0;
            height: 0;
            overflow: hidden;
            font-size: 0;
        }

        .textLeft {
            text-align: left;
        }

        .textRight {
            text-align: right;
        }

        .textCenter {
            text-align: center;
        }

        .title {
            background: #555;
            color: #fff;
            text-transform: uppercase;
        }

        .title i {
            padding-right: 8px;
        }

        .title h1,
        .title h2,
        .title h3,
        .title h4,
        .title h5,
        .title h6 {
            margin: 0;
            font-size: 15px;
            font-weight: normal;
            color: #fff;
            padding: 8px 10px;
        }

        .btn i {
            font-size: 16px;
            padding-right: 8px;
        }

        .bt-style1 {
            background: #FA8144;
            color: #fff;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
        }

        .bt-style1:hover,
        .bt-style1:focus {
            background: #de5b18;
            color: #fff;
        }

        .bt-style2 {
            background: #1EA277;
            color: #fff;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
        }

        .bt-style2:hover,
        .bt-style2:focus {
            background: #098b61;
            color: #fff;
        }

        .bt-style3 {
            background: #33343e;
            color: #fff;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
        }

        .bt-style3:hover,
        .bt-style3:focus {
            background: #161720;
            color: #fff;
        }

        .dis-bl {
            display: block;
        }

        .m1 {
            margin-top: 15px;
        }

        .pr-10 {
            padding-right: 10px;
        }

        .p15 {
            padding: 15px;
        }

        .mauto {
            margin: 0 auto;
        }
        
        #header .form-group {
            margin: 0;
        }

        #header .input-group .btn i {
            padding: 0;
        }

        .logo {
            padding: 15px 0;
            margin: 0 auto;
        }

        .logo a {
            text-indent: -99999px;
            display: block;
            background: url(../images/logo.png) no-repeat center;
            width: 100%;
            height: 30px;
            background-size: contain;
        }

        .hc-wrap {
            padding: 13px 0;
        }

        #search ul.typeahead {
            width: 100%;
        }

        .searchAJ-id {
            display: none;
        }

        #search .lodn {
            background-image: url(../images/loading.gif);
            background-position: right center;
            background-color: #fff;
            background-repeat: no-repeat;
        }

        #navigation {
            background: #FF6944;
        }

        #navigation .navbar-default {
            background: none;
            margin: 0;
            border: none;
        }

        #navigation .navbar-default .navbar-toggle .icon-bar {
            background: #fff;
        }

        #navigation .navbar-default .navbar-toggle:focus,
        .navbar-default .navbar-toggle:hover {
            background: #EA4820;
        }

        #navigation a {
            color: #fff;
            font-family: Tahoma, Geneva, sans-serif;
            font-size: 13px;
            text-transform: uppercase;
        }

        #navigation a:hover,
        #navigation a:focus {
            background: #EA4820;
        }

        #navigation .container-fluid,
        #navigation .navbar-collapse {
            padding: 0;
        }

        #sel-nav {
            margin-bottom: 15px;
            padding: 10px 0;
            background: #e9e9e9;
            border-bottom: 1px solid #ddd;
        }

        #sel-nav .form-group {
            margin: 5px 0;
        }

        .body {
            margin: 40px 0;
        }

        .post {
            background: #fff;
            padding: 10px 15px;
            margin-bottom: 15px;
            border: 1px solid #d9d9d9;
            border-top: none;
        }

        .p0 {
            padding: 0;
        }

        .m0 {
            margin: 0;
        }

        .listing {
            border-top: 1px solid #d9d9d9;
            padding: 15px 18px;
        }

        .post .listing:first-child {
            border: none;
            margin: 0;
        }

        .listing h3,
        .listing p {
            margin: 0;
            padding: 0;
            text-align: initial;
        }

        .listing h3 {
            font-size: 15px;
            font-weight: bold;
            padding-bottom: 10px;
        }

        .listing p {
            padding-bottom: 2px;
        }

        .listing p i {
            padding-right: 8px;
            font-size: 15px;
        }

        .prelist {
            background: url(../images/premium.png) no-repeat top right #ffffdf;
        }

        .prelist h3 {
            font-size: 16px;
        }

        .prelist h3 a {
            color: #CC0000;
        }

        .prelist p {
            font-size: 16px;
            color: #000000;
        }

        .tags {
            margin-top: 10px;
        }

        .tags .label-default {
            background: #1EA277;
        }

        .tags .label-default a {
            color: #fff;
        }

        .lising-wrap .pagination {
            text-align: center;
            display: block;
        }

        .detail {
            padding: 0;
        }

        .detail p {
            font-size: 16px;
        }

        .social-like {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #d9d9d9;
        }

        .rw-ui-container {
            margin-bottom: 10px;
        }

        .map-wrap {
            height: 250px;
            width: 100%;
            border: 1px solid #d9d9d9;
            background: #eee;
        }

        .list1 {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            font-size: 15px;
        }

        .list1 li {
            float: left;
            width: 30%;
            margin-right: 3%;
            margin-bottom: 5px;
        }

        .list2 {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;
            font-size: 15px;
        }

        .list2 li {
            float: left;
            width: 45%;
            margin-right: 5%;
            margin-bottom: 5px;
        }

        #footer {
            background: #33343e;
            color: #ccc;
            padding: 30px 0;
        }

        #footer-bottom {
            background: #111;
            color: #999;
        }

        .social {
            text-align: right;
            padding: 15px 0px;
        }

        #footer-bottom p {
            line-height: 20px;
            margin: 0;
            padding: 0;
        }

        #footer-bottom .row {
            background: url(../images/favicon.png) no-repeat 30px center;
        }

        .f-copyright {
            padding: 15px 0px;
            padding-left: 68px;
        }

        .re-inco {
            margin: 10px 0;
        }

        .re-inco .label {
            background: #990000;
            color: #fff;
        }

        .re-inco .label a {
            color: #fff;
        }

        .ad-300,
        .ad-728,
        .ad-336,
        .ad-970,
        .ad-320,
        .ad-res {
            margin: auto;
            text-align: center;
            overflow: hidden;
        }

        #loadmsg {
            background: url(../images/loading.gif) no-repeat center;
            height: 80px;
            display: none;
        }

        .modal {
            background: rgba(0, 0, 0, 0.7);
        }

        .loading-view {
            height: 30px;
            background: url(../images/loading.gif) no-repeat center;
        }

        #remove-box,
        #edit-box,
        #action-box {
            display: none;
        }

        .edit-number,
        .remove-number {
            margin-top: 15px;
        }

        .checkbox {
            height: 20px;
            width: 20px;
            margin: 5px;
        }

        #claimNumber .form-group {
            margin-bottom: 8px;
        }

        .input-group-addon.beautiful input[type="checkbox"],
        .input-group-addon.beautiful input[type="radio"] {
            display: none;
        }

        @media (min-width: 768px) and (max-width: 979px) {
            .hc-wrap {
                padding: 0;
                padding-bottom: 10px;
            }

            .f-copyright {
                padding: 10px 0;
            }

            #footer-bottom,
            .social {
                text-align: center;
            }

            .social {
                padding: 10px 0;
            }

            .list1 li {
                width: 45%;
                margin-right: 5%;
                float: left;
            }

            .list2 li {
                float: none;
                width: 100%;
            }
        }

        @media (max-width: 767px) {
            .hc-wrap {
                padding: 0;
                padding-bottom: 10px;
            }

            .f-copyright {
                padding: 10px 0;
            }

            #navigation .container-fluid,
            #navigation .navbar-collapse {
                padding: 0 15px;
            }

            #footer-bottom,
            .social {
                text-align: center;
            }

            .social {
                padding: 10px 0;
            }

            .list1 li {
                float: none;
                width: 100%;
            }

            .list2 li {
                float: none;
                width: 100%;
            }

            .ad-970 {
                display: none;
            }

            .ad-728 {
                display: none;
            }
        }
        
        .detail .label a {
            color: #fff;
        }
        
        #headerdiv {
            align-items: center;
            justify-content: space-between;
            display: flex;

        }

        .header p {
            margin-right: 25%;
            margin-left: inherit;
        }
        @media (max-width: 480px) {
            .body {
            margin-top:25%;
            }
        }
        `;
export default GlobleStyle;
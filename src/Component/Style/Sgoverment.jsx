import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
/*--------------------------------------------------------------
    # Goverment style
--------------------------------------------------------------*/


ul,
    ol {
    list-style: none
}





.row {
    margin-left: -10px;
    margin-right: -10px;
}

[class^= "span"] {
    position: relative;
    min-height: 1px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
}

.span12 {
    width: 100%;
}

h1,
h2,
h3,
h4 {
    margin: 0 0 10px;
    padding: 0;
    outline: 0;
    font-weight: 600;
    line-height: 1.4em;;
}

h2 {
    font-size: 22px;
    text-align: initial;
}
em {
    font-style: normal;
}

a {
    color: #0060ff;
    cursor: pointer;
    text-decoration: none;
    outline: 0
}

.hide {
    display: none!important
}

.visible-xs {
    display: none
}

.head {
    align-content: start;
    display: grid;
    text-align: initial;
}

input[type = "text"].txtlcfmail {
    text-transform: none;
}

.wraper {
    position: relative;
}

.wraper.images {
    position: absolute;
    top: 0;
    right: 0
}

.wraper.head.bizlinkurl {
    color: #222
}

.wraper.images span {
    position: absolute;
    color: #fff;
    font-size: 12px;
    background-color: rgba(0, 0, 0, .5);
    padding: 5px 5px 5px 25px;
    display: inline - block;
    line-height: 14px;
    top: 5px;
    right: 5px;
    border-radius: 3px;
}

.wraper.images figure {
    border-radius: 5px;
    overflow: hidden;
    max-height: 220px;
    cursor: pointer;
}

.wraper.images img {
    width: 135px;
    height: 105px;
    object-fit: cover;
}

.lcfpop.gq:before {
    content: 'Get Quotes';
    display: inline - block;
    text-transform: uppercase;
}

.savePhoneEmail.stp:before {
    content: 'Save to Phone';
    display: inline - block;
    text-transform: uppercase;
}

.wraper.body {
    overflow: hidden;
    backface-visibility: hidden;
    margin-top: 15px;
}

.wrapaction {
    display: none
}

.listheader {
    position: relative;
    padding: 10px 0;
    margin-bottom: 10px;
}

.listheader.sort-by {
    position: absolute;
    right: 0;
    bottom: 20px
}

.filter > ul > li {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}

.leftpanel.filter.close,
.leftpanel.filter.filterapply {
    display: none;
}

.quick-links {
    padding: 15px 8px 15px 15px;
}

.quick-links li {
    padding: 5px 0;
}

.quick-links li a {
    color: #666
}

.loadlist,
.loadlist:focus,
.loadlist:hover,
.pagination.loadlist {
    background-color: #fff;
    color: #e53935;
    border: none;
    box-shadow: 0 1px 6px rgba(32, 33, 36, .28);
    width: 100%;
}

.qus-ans.card,
.seo-block.card {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 - 2px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px - 2px rgba(0, 0, 0, .2)!important;
    border-radius: 3px;
    margin: 15px 0;
    float: left;
    width: 100%;
    position: relative;
}

.prodblock.prodwrap > li {
    width: 20%;
    display: inline-block;
    padding: 0 8px;
    vertical-align: top;
    position: relative;
}

.topreviews.scroll-wrap.span3 {
    margin-bottom: 10px;
    padding-bottom: 20px;
}

.sc-item {
    float: left;
    display: block;
    padding: 0 10px;
}

.expand-booking {
    max-height: 500px;
    overflow: hidden;
}

.booking-toggle {
    position: absolute;
    bottom: 10px;
    right: 20px;
    cursor: pointer;
}

.hide-booking-toggle {
    display: none;
}

.seo-block.card.title a {
    font-size: 14px;
}

.related-brandlinks {
    padding: 15px 8px 15px 15px;
}

.related-brandlinks li {
    padding: 5px 0;
}

.related-brandlinks li a {
    color: #666;
}

.leftpanel.related-brandlinks ul {
    max-height: 300px;
    overflow-y: auto;
}

.filter,
.related-brandlinks {
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
    -moz-box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 3px;
    font-size: 13px;
}

.w-card {
    margin-bottom: 30px;
    padding: 0 10px;
}

.card-blogs {
    display: flex;
}

.card-blogs > li {
    width: 33%;
    margin: 0 45px 0 0;
    background: #fff;
    box-shadow: 0 1px 6px rgba(32, 33, 36, .28);
    border-radius: 3px;
    padding: 0 15px 25px;
    overflow: hidden;
    position: relative;
}

.w-innercard.card-blogs > li {
    padding-bottom: 75px
}

.card-blogs li:last-child {
    margin: 0;
}

.card-blogs li figure {
    height: 200px;
    overflow: hidden;
    margin: 0 - 15px;
}

.card-blogs li figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.card-blogs li h3 {
    margin: 15px 0 0;
}

.card-blogs li h3 a {
    color: #333;
    display: block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-blogs li h3 a:first-letter {
    text-transform: uppercase;
}

.card-location {
    margin: 2px 0 0;
}

.card-location span {
    vertical-align: middle;
    margin: 0 10px 0 0;
}

.card-location > span {
    font-size: 13px;
    color: #666;
}

.card-blogs p.icon-tag {
    padding-left: 25px;
    font-size: 13px;
    color: #666;
    margin: 10px 0 0;
}

.card-blogs.icon-address {
    font-size: 13px;
    padding-left: 40px;
    margin: 15px 0 0;
}

.card-blogs button.btn-p {
    margin-top: 20px;
    display: block;
    position: absolute;
    bottom: 15px;
}

.reviews{
    text-align: initial;
} 
.icon-address{
    text-align: initial;
}
.card-blogs.icon-address.get-direct {
    margin: 0;
    display: block;
}

.w-innercard.listing-wrap.spec.detail.icon li {
    min-width: 50%;
    max-width: 50%;
    margin: 0;
    padding: 15px 10px 10px 35px;
}

.w-innercard.listing-wrap.spec.detail.bg {
    flex-wrap: wrap;
    margin: 10px 0 0;
    padding: 0 0 0 15px;
}

.listingwrap {
    padding-top: 10%;
}

.w-innercard.listing-wrap.spec.detail.icon li:before,
        .custom-cardattr.listing-wrap.spec.detail.icon li:before {
    top: auto;
}

.custom-cardattr.listing-wrap.spec.detail.icon li {
    min-width: auto;
    max-width: inherit;
    margin: 0 15px 0 0;
    padding: 15px 0 10px 35px;
}

.custom-cardattr.listing-wrap.spec.detail.bg {
    flex-wrap: wrap;
    padding: 0 0 0 20px;
    justify-content: flex - start;
    margin: 10px 0 20px;
}

@media screen and(min-width: 1400px) {
    .steps-wrap {
        min-height: 450px;
        max-height: 450px;
    }
}

@media screen and(min-width: 1700px) {
    .steps-wrap {
        min-height: 580px;
        max-height: 580px;
    }

    .heading {
        padding: 20px 0;
    }

    .form-wrap.scroll-wrap {
        padding-top: 25px;
    }

    .form-wrap.steps.title-bar label {
        margin-bottom: 20px;
    }
}

@media screen and(max-width: 1380px) {
    .breadcrumb.container {
        padding: 5px 20px;
    }

    .form-wrap.list-inner li {
        padding: 10px;
    }

    .heading {
        padding: 5px 0 15px 0;
    }

.heading h1,
.heading.t-count,
.heading.t-in {
    font-size: 18px;
}

.heading p {
    font-size: 12px;
}

.steps-wrap {
    min-height: 400px;
    max-height: 400px;
}

.form-wrap.lcf-city.sd-link {
    font-size: 18px;
}
}

@media(min-width: 1024px) {
    .nav-bar.nav li:hover a {
        color: #e53935;
    }
}

@media(max-width: 720px) {
    .listingwrap {
        padding-top: 30%;
    }
    .hidevirtual{
        padding:10% 0;
    }
}

.listheader.serv-title.min-height {
    max-height: 215px;
    overflow: hidden;
}

.read-more-link {
    position: absolute;
    right: 10px;
    bottom: 3px;
    font-size: 12px;
}

a.read-more-link.p-m {
    bottom: 15px;
    right: 15px;
    font-size: 14px;
}

.question h3 {
    font-size: 14px;
}

.businesspromo.img.ads a {
    height: 90px!important;
}
`;
export default GlobleStyle;
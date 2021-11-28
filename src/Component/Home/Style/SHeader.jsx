import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
:root {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: "Open Sans", sans-serif;
    color: #444444;
  }
  
  a {
    color: #4154f1;
    text-decoration: none;
  }
  
  a:hover {
    color: #717ff5;
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Nunito", sans-serif;
  }
  
  
  /*--------------------------------------------------------------
  # Breadcrumbs
  --------------------------------------------------------------*/
  .breadcrumbs {
    padding: 15px 0;
    background: #012970;
    min-height: 40px;
    margin-top: 82px;
    color: #fff;
  }
  
  @media (max-width: 992px) {
    .breadcrumbs {
      margin-top: 57px;
    }
  }
  
  .breadcrumbs h2 {
    font-size: 28px;
    font-weight: 500;
  }
  
  .breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 0 10px 0;
    margin: 0;
    font-size: 14px;
  }
  
  .breadcrumbs ol a {
    color: #fff;
    transition: 0.3s;
  }
  
  .breadcrumbs ol a:hover {
    text-decoration: underline;
  }
  
  .breadcrumbs ol li + li {
    padding-left: 10px;
  }
  
  .breadcrumbs ol li + li::before {
    display: inline-block;
    padding-right: 10px;
    color: #8894f6;
    content: "/";
  }
  
  /*--------------------------------------------------------------
  # Back to top button
  --------------------------------------------------------------*/
  .back-to-top {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
    background: #4154f1;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    transition: all 0.4s;
  }
  
  .back-to-top i {
    font-size: 24px;
    color: #fff;
    line-height: 0;
  }
  
  .back-to-top:hover {
    background: #6776f4;
    color: #fff;
  }
  
  .back-to-top.active {
    visibility: visible;
    opacity: 1;
  }
  
  /*--------------------------------------------------------------
  # Disable aos animation delay on mobile devices
  --------------------------------------------------------------*/
  @media screen and (max-width: 768px) {
    [data-aos-delay] {
      transition-delay: 0 !important;
    }
  }
  

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header {
  transition: all 0.5s;
  z-index: 997;
  padding: 5px 7px 5px 10px;
  margin:0 -20px;
  box-shadow: 2px 2px 2px brown;
  background:-webkit-linear-gradient(360deg, rgba(0, 255, 235, 1) 0%, rgba(106, 136, 212, 1) 100%);
}

.header div{
    max-width:1360px;
    padding:0px 15px 0 10px;
}

.header.header-scrolled {
  background: #44bbab;
  background-size: cover;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
}

.header .logo {
  line-height: 0px;
}

.header .logo img {
  max-height: 90px;
  margin-right: 4px;
  margin-left: 4px;
}
.header p{
  font-size: 16px;
  margin:0px;
  text-align: center;
}

.header .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #012970;
  font-family: "Nunito", sans-serif;
  margin-top: 3px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* navbar animation */
@import 'https://fonts.googleapis.com/css?family=Raleway';
.navbar {
  padding: 0;
}

div.container
{
    font-family: Raleway;
    text-align: center;
}
div.container ul li a
{
    color: #111;
    text-decoration: none;
    font: 24px Raleway;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
}
 /* Border from Y to X  */

div.borderYtoX a:before, div.borderYtoX a:after
        {
            position: absolute;
            height: 100%;
            width: 2px;
            opacity: 0;
            content: '';
            background:#08da4e;
            color:#0b198f;
            transition: all 0.5s;
        }

        div.borderYtoX a:before
        {
            left: 0px;
            top: 0px;
        }
        
        div.borderYtoX a:after
        {
            right: 0px;
             bottom: 0px;
        }
        
div.borderYtoX a:hover:before, div.borderYtoX a:hover:after{
   opacity: 1;
   height: 2px;
   width: 100%;
}

/* navbar ul */

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Nunito", sans-serif;
  font-size: 15px;
  color: #013289;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover, .navbar .active, .navbar li:hover > a {
  color: #4154f1;
}

.navbar .getstarted {
  background: #4154f1;
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 4px;
  color: #fff;
}

.navbar .getstarted:hover {
  color: #fff;
  background: #5969f3;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: -93px;
  top: calc(100% + 30px);
  margin: 10px 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #4154f1;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #012970;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }
  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: none;
  transition: 0.3s;
}

.navbar-mobile .mobile-nav-toggle {
  top: 15px;
  right: 15px;
}

.navbar-mobile ul{
  display: block;
  position: fixed;
  top: 12%;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 10px;
  background-color: rgb(102 206 194 / 60%);
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a {
  padding: 10px 20px;
  font-size: 15px;
  color: #012970;
}

.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #4154f1;
}

.navbar-mobile .getstarted {
  margin: 15px;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background-color: rgb(102 206 194 / 40%);
  background-size: cover;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
  color: #4154f1;
}

.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}

`;
export default GlobleStyle;


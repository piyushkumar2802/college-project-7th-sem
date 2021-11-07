import { createGlobalStyle } from 'styled-components';

const Services = createGlobalStyle`
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
  ul {
    margin: 0px;
    padding: 0px;
  }
  .footer-section {
  background: #474f66;
  position: relative;
  }
  .footer-cta {
  border-bottom: 1px solid #373636;
  }
  .single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
  }
  .cta-text {
  padding-left: 15px;
  display: inline-block;
  }
  .cta-text h4 {
  color: #95b3e7;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
  }
  .cta-text span {
  font-size: 15px;
  color: #eee;
  }
  .footer-content {
  position: relative;
  z-index: 2;
  }
  .footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
  }
  .footer-logo {
  margin-bottom: 30px;
  }
  .footer-logo img {
    max-width: 200px;
  }
  .footer-text p {
  margin-bottom: 14px;
  font-size: 20px;
  color: #111;
  line-height: 28px;
  }
  .footer-social-icon{
      margin-bottom: 5%;
  }
  .footer-social-icon span {
  color: #95b3e7;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
  }
  .footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
  margin-bottom: 10px;
  }
  .footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
  }
  .facebook-bg{
  background: #3B5998;
  }
  .twitter-bg{
  background: #55ACEE;
  }
  .google-bg{
  background: #DD4B39;
  }
  .footer-widget{
      text-align: center;
  }
  .footer-widget-heading h3 {
  color: #95b3e7;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
  }
  .footer-widget-heading h3::before {
  content: "";
  position: absolute;
  bottom: -10px;
  height: 2px;
  width: 100px;
  background: purple;
  }
  .footer-logo{
    font-size: 30px;
    color: #c2a10f;
  }
  .footer-logo:hover{
    font-size: 34px;
    color: #466ef1;
  }
  .footer-widget ul li {
  display: inline-block;
  width: 50%;
  margin-bottom: 12px;
  }
  .footer-widget ul li a:hover{
  color: #ff5e14;
  }
  .footer-widget ul li a {
  color: #e0e3ee;
  text-transform: capitalize;
  text-decoration: none;
  }
  .subscribe-form {
  position: relative;
  overflow: hidden;
  }
  .subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
  border-radius: 10px;
  }
  .subscribe-form button {
    position: absolute;
    right: 0;
    background: #ff5e14;
    padding: 26px 30px;
    border: 1px solid #ff5e14;
    top: 0;
    border-radius: 10px;
  }
  .subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
  }
  .copyright-area{
  background: #202020;
  padding: 25px 0;
  text-align: center;
  } */
  
  .copyright-text p a{
  color: #5b42e7;
  }
  .footer-menu li {
  display: inline-block;
  margin-left: 20px;
  }
  .footer-menu li:hover a{
  color: #ff5e14;
  }
  .footer-menu li a {
  font-size: 14px;
  color: #878787;
  }
  .copyright-text p {
  margin: 0 !important;
  color: #d12a2a;
  }
`;
export default Services;
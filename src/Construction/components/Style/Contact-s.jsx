import { createGlobalStyle } from 'styled-components';

const Services = createGlobalStyle`

.contact{
  margin: 0%;
  padding: 2% 0;
  padding-bottom: 10%;
  background: #767c94;
}

.h-c{
  font-size: 24px;
  color: #000;
  /* text-shadow:0px -18px 1px #494b2f; */
  transform: skewX(-25deg);
  padding-top:15%;
  left: 15%;
  position: relative;
  cursor: pointer;
  display: table-cell;
  border-bottom: 2px solid purple;
}

.h-c:hover{
  text-shadow: none;
  transform: none;
  transition: 1s;
  color:#494b2f;
}

  .fontawesome{
      color:blue;
      font-size:30px;
      margin-top:2%;
      margin-left:3%;
  }
.info-box {
  color: #444444;
  background: #5c6074c8;
  padding: 30px;
  border-radius: 15px;
}

.contact-icon{
  font-size: 30px;
  line-height: 0;
  color: #080e44;
}

.info-box span {
  font-size: 20px;
  color: #95b3e7;
  font-weight: 700;
  margin: 20px 0 10px 5%;
}

.info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
  color:#eee;
}

.php-email-form {
  background: #5c6074c8;
  padding: 30px;
  border-radius: 15px;
  height: 100%;
}

.php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
}

.php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #fff;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.php-email-form input, .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 10px;
  background: #54596b;
}

 .php-email-form input:focus, .php-email-form textarea:focus {
  border-color: #eee;
  background: #585c5c;
}

.php-email-form input {
  padding: 10px 15px;
}

.php-email-form textarea {
  padding: 12px 15px;
}
 .php-email-form button[type="submit"] {
  background: #4858eb;
  border: 0;
  border-radius: 40px;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}

.php-email-form button[type="submit"]:hover {
  background: #5969f3;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;
export default Services;
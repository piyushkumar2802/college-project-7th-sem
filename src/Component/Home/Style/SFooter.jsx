import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
.footer{
  background: #0e3b4f;
  color:#ec6417;
  padding: 10px 0 !important;
}
.footer h1{
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 25px;
}
.footer a{
  font-size: 16px;
  list-style: none;
  color:#fff;
  text-decoration: none;
}
.footer a:hover{
  color: #284e91;
}
.footer p:hover{
  font-size: 16px;
  cursor: pointer;
  color: orange;
}
.footer-image img{
  width:-moz-available;
  cursor: pointer;
  height: 30vh;
  width: 60%;
}
.copyright{
  font-size: 15px;
  padding-bottom: 20px;
  color: aquamarine;
}
.fa-at{
  color: aqua;
  font-size: 18px;
  cursor: pointer;
}
.footer hr{
  margin-top: 10px;
  background-color: #ccc;
}
.footer-logo{
  padding-right: 20px;
  font-size: 15px;
}



	@media screen and (min-width: 601px) {
  li.link {
    font-size: 80px;
  }
}
`;
export default GlobleStyle;
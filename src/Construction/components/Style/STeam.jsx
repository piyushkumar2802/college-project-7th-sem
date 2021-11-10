import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
    /*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team{
    padding-bottom: 5%;
    padding-top: 20px;
    background-color: #919191;
}

.h-Team{
  margin: 0%;
  padding: 2% 0;
  padding-bottom: 5%;
}

.h-T{
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

.h-T:hover{
  text-shadow: none;
  transform: none;
  transition: 1s;
  color:#494b2f;
}

.team .member {
    text-align: center;
    margin-bottom: 20px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 30px 20px;
    background: #91919F;
  }
  
  .team .member img {
    max-width: 60%;
    border-radius: 50%;
    margin: 0 0 30px 0;
  }
  
  .team .member h4 {
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
  }
  
  .team .member span {
    font-style: italic;
    display: block;
    font-size: 13px;
  }
  
  .team .member p {
    padding-top: 10px;
    font-size: 14px;
    font-style: italic;
    color: #ccc;
  }
  
  .team .member .social {
    margin-top: 15px;
  }
  
  .team .member .social a {
    color: #919191;
    transition: 0.3s;
  }
  
  .team .member .social a:hover {
    color: #cc1616;
  }
  
  .team .member .social i {
    font-size: 18px;
    margin: 0 2px;
  }
`;
export default GlobleStyle;


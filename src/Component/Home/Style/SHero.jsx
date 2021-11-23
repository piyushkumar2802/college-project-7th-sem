import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`

.hero {
    width: 100%;
    height: 100vh;
  }
  
  .hero h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    color: #012970;
  }
  
  .hero .btn-get-started:hover i {
    transform: translateX(5px);
  }
  
  .hero .hero-img {
    text-align: right;
  }
  
  @media (max-width: 991px) {
    .hero {
      height:100vh;
      padding:0px 10px 0px 10px;
    }
    .hero .hero-img {
      text-align: center;
      margin-top: 80px;
    }
    .hero .hero-img img {
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    .hero {
      text-align: center;
      padding:130px 30px 0px 30px;
      height:70vh;
    }
    .hero h1 {
      font-size: 32px;
    }
    .hero h2 {
      font-size: 24px;
    }
    .hero .hero-img img {
      width: 100%;
    }
  }

  @media (max-width: 540px) {
    .hero {
      text-align: center;
      padding:100px 0px 0px 0px;
      height:45vh;
    }
    .hero h1 {
      font-size: 32px;
    }
    .hero h2 {
      font-size: 24px;
    }
    .hero .hero-img img {
      width: 100%;
      height:100vh;
    }
  }
  
  /* Slider */
  #slider{
    width:100%;
    height:400px;
    position: absolute;;
    overflow:hidden;
    margin-top: 5;
  }
  @media (max-width: 991px){
  #slider{
    width:100%;
    height:70vh;
    padding:0px;
    margin:unset;
  }
  }
  @media (max-width: 540px){
  #slider{
    width:100%;
    height:28vh;
    padding:0px;
    margin:unset;
  }
  }
  @keyframes load{
    from{left:-100%;}
    to{left:0;}
  }
  .slides{
    width:400%;
    height:100%;
    position:relative;
    -webkit-animation:slide 30s infinite;
    -moz-animation:slide 30s infinite;
    animation:slide 30s infinite;
  }
  .slider{
    width:25%;
    height:100%;
    float:left;
    position:relative;
    z-index:1;
    overflow:hidden;
    border-radius: 10px;
  }
  @media(max-width:920px){
    .slider{
      padding:0px;
      animation-duration: 1s;
      height:80vh;
  }
  }
  
  @media(max-width:540px){
    .slider{
      padding:0px;
      animation-duration: 1s;
      height:100vh;
  }
  }
  
  .text-slider{
    padding:100px  10px 0 10px;
    text-align: justify;
  }
  
  .hero .btn-get-started {
    margin-top: 30px;
    line-height: 0;
    padding: 15px 40px;
    border-radius: 4px;
    transition: 0.5s;
    color: #fff;
    background: #4154f1;
    box-shadow: 0px 5px 30px rgb(65 84 241 / 40%);
  }
  .slide img{
    width:100%;
    height:100%;
    
  }
  .slide img{
    width:100%;
    height:100%;
  }
  .image{
    width:100%;
    height:100%;
    padding-bottom:0px;
  }
  .image img{
    width:100%;
    height:auto;
  }
  /* animation slider */
  .slider1{
  
    width:100%;
    height:240px;
    position:absolute;
    overflow:hidden;
    padding:0px 20px 0 20px;
  }
  
  .content-txt{
    display:inline-block;
      min-width: 45px;
      max-width: 500px;
      height: 275px;
      color:#fff;
      border:none;
      border-radius:5px;
      text-align: center;
      margin:50px 0 10px 50px;
      padding:15px 0 0 0 ;
      line-height: 60px;
      font-size:14px;
      font-weight:14px;
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms;
      text-transform: capitalize;
      background:rgb(157 177 179 / 42%);
  }
  @media (max-width: 920px) {
  .content-txt{
    width:400px;
    height:35vh;
    margin:50px 0 10px 0px;
    border-radius: 36px;
    background-color:#506f6780;
   }
  }

  @media (max-width: 540px) {
  .content-txt{
    display: none;
   }
  }
  
  .content-txt h1{
    font-family:Arial;
    text-transform:uppercase;
    font-size:24px;
    color:rgb(238, 146, 146);
    text-align:left;
    margin:10px;
    padding-bottom:10px;
    animation-duration: 1s;
    animation-delay: 1s;
  }
  .content-txt a{
    font-weight:normal;
    font-size:18px;
    border-radius: 10px;
    font-style:italic;
    text-align: center;
    color:rgb(76, 34, 226);
    background: #3ab7c0;
    margin:30px 0 0 0;
    padding:10px;
    animation-duration: 1s;
    animation-delay: 2.2s;
  }
  .content-txt p{
  font-size:14px;
  margin:10px;
  color:#111;
  }
  /* end animation slider */
  
  /* Animation */
  @keyframes slide{
       0% { left: 0%; }
       20% { left: 0%; }
       25% { left: -100%; }
       45% { left: -100%; }
       50% { left: -200%; }
       70% { left: -200%; }
       75% { left: -300%; }
       95% { left: -300%; }
       100% { left: -400%; }
  } 

  `;
export default GlobleStyle;
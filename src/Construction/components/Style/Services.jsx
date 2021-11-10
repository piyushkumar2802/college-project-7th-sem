import { createGlobalStyle } from 'styled-components';

const Services = createGlobalStyle`

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services{
  background:#ccc;;
  padding-top: 10px;
  padding-bottom: 10%;
}


.h-Services{
  margin: 0%;
  padding: 2% 0;
  padding-bottom: 5%;
}

.h-S{
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

.h-S:hover{
  text-shadow: none;
  transform: none;
  transition: 1s;
  color:#494b2f;
}


.services .icon-box {
  text-align: center;
  padding: 80px 20px;
  transition: all ease-in-out 0.3s;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #cc1616;
  transition: all .3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transform-style: preserve-3d;
}

.services .icon-box .icon i {
  color: #fff;
  font-size: 28px;
}

.services .icon-box .icon::before {
  position: absolute;
  content: '';
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: #fce5e5;
  transition: all .3s ease-out 0s;
  transform: translateZ(-1px);
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #191919;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  background: #cc1616;
  border-color: #cc1616;
  padding: 70px 20px 90px 20px;
}

.services .icon-box:hover .icon {
  background: #fff;
}

.services .icon-box:hover .icon i {
  color: #cc1616;
}

.services .icon-box:hover .icon::before {
  background: #e82d2d;
}

.services .icon-box:hover h4 a, .services .icon-box:hover p {
  color: #fff;
}

`;
export default Services;
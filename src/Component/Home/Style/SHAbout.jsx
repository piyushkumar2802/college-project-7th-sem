import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
.about .content {
  background-color: #f6f9ff;
  padding: 40px;
}

.about h3 {
  font-size: 14px;
  font-weight: 700;
  color: #4154f1;
  text-transform: uppercase;
  text-align: left;
}

.about h2 {
  font-size: 24px;
  font-weight: 700;
  color: #012970;
  text-align: left;
}

.about p {
  margin: 15px 0 30px 0;
  line-height: 24px;
}

.about .btn-read-more {
  line-height: 0;
  padding: 15px 40px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  margin-left:50px;
  background: #4154f1;
  box-shadow: 0px 5px 25px rgba(65, 84, 241, 0.3);
}

.about .btn-read-more span {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
}

.about .btn-read-more i {
  margin-left: 5px;
  font-size: 18px;
  transition: 0.3s;
}

.about .btn-read-more:hover i {
  transform: translateX(5px);
}
`;
export default GlobleStyle;
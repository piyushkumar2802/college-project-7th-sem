import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
.values .box {
  padding: 30px;
  box-shadow: 0px 0 5px rgba(1, 41, 112, 0.08);
  text-align: center;
  transition: 0.3s;
  height: 100%;
}

.values .box img {
  padding: 30px 50px;
  transition: 0.5s;
  transform: scale(1.1);
}

.values .box h3 {
  font-size: 24px;
  color: #012970;
  font-weight: 700;
  margin-bottom: 18px;
}

.values .box:hover {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
}

.values .box:hover img {
  transform: scale(1);
}

/*--------------------------------------------------------------
# Sections
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-header {
  text-align: center;
  padding-bottom: 40px;
}

.section-header h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0;
  color: #4154f1;
  text-transform: uppercase;
}

.section-header p {
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 38px;
  line-height: 42px;
  font-weight: 700;
  color: #012970;
}

@media (max-width: 768px) {
  .section-header p {
    font-size: 28px;
    line-height: 32px;
  }
}
`;
export default GlobleStyle;
import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
.recent-blog-posts .post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
  overflow: hidden;
  padding: 30px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.recent-blog-posts .post-box .post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
}

.recent-blog-posts .post-box .post-img img {
  transition: 0.5s;
}

.recent-blog-posts .post-box .post-date {
  font-size: 16px;
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
  display: block;
  margin-bottom: 10px;
}

.recent-blog-posts .post-box .post-title {
  font-size: 24px;
  color: #012970;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
  transition: 0.3s;
}

.recent-blog-posts .post-box .readmore {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1;
  transition: 0.3s;
}

.recent-blog-posts .post-box .readmore i {
  line-height: 0;
  margin-left: 4px;
  font-size: 18px;
}

.recent-blog-posts .post-box:hover .post-title {
  color: #4154f1;
}
`;
export default GlobleStyle;
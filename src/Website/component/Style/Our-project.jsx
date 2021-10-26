import { createGlobalStyle } from 'styled-components';

const Project = createGlobalStyle`
// <------------------------- our project -------------------------->

.project{
    background-color:pink;
    // color:#fff;
}
.project-div{
    columns:2;
    // width:70%;
    // align-item:center;
}
.project-div li a{
    list-style:none;
}
.project-div-li-w{
    border:2px solid black;
    text-align:center;
    border-radius:60%;
    width: 25%;  
}
.project-div-li-m{
    border:2px solid red;
    text-align:center;
    border-radius:60%;
    width: 25%;
}
.project-title{
    columns:3;
    margin 20px 0;
    // padding: 0.5rem;
}
.project-title li{
    border:2px solid #ffff;
    border-raadius:10px;
    width:90%;
    height:10%;
    padding: 0.5rem;
    margin-bottom:1rem;
    
    text-align: center;
}

`
export default Project;
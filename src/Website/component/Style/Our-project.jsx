import { createGlobalStyle } from 'styled-components';

const Project = createGlobalStyle`
// <------------------------- our project -------------------------->

.project{
    background-color: #421a1a;
    color:#e9ecef;
}

.project-div{
    columns:2;
    display: inline flow-root list-item;
}

.project-div li a{
    list-style:none;
}

.project-div-li-w{
    border:2px solid black;
    text-align:center;
    border-radius:10%;
    width: 100%;
    padding:10px;
}

.project-div-li-w :hover{
    color:black;
    text-decoration: none;
}

.project-div-li-m :hover{
    color:red;
    text-decoration: none;
}

.project-div-li-m{
    border:2px solid red;
    text-align:center;
    border-radius:10%;
    padding:10px;
    width: 100%;
}

.project-title{
    columns:2;
    padding : 20px 10px;
    margin : 0;
    padding: 0.5rem;
}
.project-title-a{
    text-decoration: none;
    color: #e9ecef;
}

.project-title li{
    border:2px solid #ffff;
    border-radius:10px;
    width:90%;
    height:10%;
    padding: 0.5rem;
    margin-bottom:1rem;
    text-align: center;
}
@media only screen and ( max-width:980px) {
    .project-title{
        columns:1;
        padding:0 10%;
        width:100%;
    }
}

`
export default Project;
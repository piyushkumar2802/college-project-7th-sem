import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
    :root{
        --purple-primary :hsl(243,69,59);
        --accent-pink :hsl(345,88,63);
        --natural-light :hsl(222,100,97);
        --lavender-secondary :hsl(237,21,52); /*primary font color*/
        --dark-primary : hsl(237,56,20);
        --border-color :hsl(260,68,83);
    }
    .main-div{
        width:100%;
        height:100vh;
        background-color:#6983aa;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        text-align:center;
    }

    .center-div{
        height:80vh;
        background: #2e4e7e;
        box-shadow:5px 5px 25px -5px rgba(0,0,0,0.5);
        border-radius:15px;
    }
    h1{
        color:white;
        background:transparent;
        background-color:#8566aa;
        padding:6px 0 2px 0 ;
        margin-bottom:10px;
        box-shadow:5px 5px 15px -5px rgba(0,0,0,0.3);
    }
    input{
        text-align:center;
        height:30px;
        top:10px;
        border:none;
        background:transparent;
        font-size:20px;
        font-weight:500;
        width:60%;
        border-bottom:2px solid #8566aa;
        outline: none;
    }
    button{
        min-height:40px;
        width:40px;
        border-radius:50%;
        background-color:#8566aa;
        color:#fff;
        font-size:40px;
        border:none;
        outline :none;
        margin-left:10px;
        box-shadow:5px 5px 15px -5px rgba(0,0,0,0.3);
    }
    button:hover{
        background-color:#20bf6b;
    }
    ol{
        margin-top:30px;
    }
    ol li{
        padding-left:0px;
        text-align:left;
        min-height:40px;
        display:flex;
        align-items: center;
        color:#bebbbb;
        font-size:20px;
        font-weight:500;
        text-transform:capitalize;
    }

`;
export default GlobleStyle;
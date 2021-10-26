import { createGlobalStyle } from 'styled-components';

const Header = createGlobalStyle`
.top-nav-bar{
    height: 57px;
    top:0;
    position: sticky;
    background: #fff;
    margin-bottom: 20px;
    border-bottom: 3px solid orange;
    z-index: 2;
}
.form-control{
    margin-top:9px;
    margin-left: 0px;
    margin-bottom: 2%;
    background:#ead1d1;
    // border:1px solid orange !important;
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    box-shadow: none !important;
}
.input-group-text{
    background: orange !important;
    border: 1px olid orange;
    margin-top:9px;
    margin-bottom: 2%;
    margin-left: 0%;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    cursor: pointer;
}
.fontawesome{
    margin-right: 5px;
    color:#1f1c88;
}
.fontawesome:hover .menu-bar ul li a{
    color:black;
}
.search-box{
    display: inline-flex;
}
.fa-search{
    color:#1f1c88;
}
/* menu-bar */
.menu-bar{
    height:57px;
    float: right;
}
.menu-bar ul{
    display: inline-flex;
    float: right;
}
.menu-bar ul li{
    border-left: 1px sold #fff;
    list-style-type: none;
    padding:15px 35px;
    text-align: center;
    background-color: orange;
    cursor: pointer;
}
.menu-bar ul li a{
    font-size: 16px;
    color:black;
    text-decoration: none;
}
.menu-bar ul li a:hover{
    color:#1f1c88;
}
@media only screen and ( max-width:980px) {
    .top-nav-bar{
        height: 118px;
        border-bottom:0;
    }
    .search-box{
        width:100%;
        margin-right: 10px;
    }
    .menu-bar{
        width:100%;
    }
    .menu-bar ul{
        margin:10px 0;
        width:100%;
        padding-left: 0rem;
    }
    .menu-bar ul li{
        height: 57px;
        width:100%;
    }
}
@media only screen and (max-width:1098px){
    .top-nav-bar{
        height:78px;
    }
    .form-control{
        margin-top:15px;
    }
    .input-group-text{
        margin-top:15px;
    }
}

`;
export default Header;
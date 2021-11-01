// <-------------app testing service section-------------------------> 
import { createGlobalStyle } from 'styled-components';

const Testing = createGlobalStyle`

.testing{
    padding-top:10px;
    padding-bottom:1px;
    width:100%;
    color:#e9ecef;
    background-color:#730;
    margin:0 50px 0 0;
}
.text-ul{
    columns:3;
    margin-top:40px;
    }
.app-had{
    text-align:center;
}
.app_had_content{
    font-size:12px;
}
.app_text{
    width:90%;
    margin-bottom: 1.5rem!important;
    padding: 0.5rem!important;
    text-align:center;
    background-color:chocolate;
    color:#e9ecef;
    border:1px solid #e9ecef;
}
.app_text:hover{
    background-color:#730;
    color:black;
    // transform: scale(1) skew(-40deg, 0deg);
}
// <------------ SEO/ SMO and Paid Marketing -------------------->
.seo_mark{
    width:100%;
    padding-top:2%;
    padding-bottom: 2%;
    color:#e9ecef;
    background-color:#720;
}
.app_had_content{
    font-size:14px;
    margin-top:20px;
    margin-bottom:50px;
}
.seo-btn{
    border-radius: 50%;
}
.seo-btn:hover{
    cursor:pointer;
    background-color:#730;
    border:none;
}

// <------------ testing section -------------------->

.testing-footer{
    width:100%;
    /* height:20vh; */
    color:#e9ecef;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color:maroon;
}
.testing-footer-ul{
    columns:3;
    padding-top:1%;
    padding-bottom: 0%;
}
.texting-footer-icon{
    color:greenyellow;
}
.testing-footer-ul li{
    border:1px solid #e9ecef;
    width:90%;
    text-align:center;
    padding:0.5rem;
    margin-bottom: 1.0rem!important;
}

// mobile
@media (max-width: 490px) and (min-width: 0px){

// <-------------app testing service section-------------------------> 

    .testing{
        /* height:210vh; */
    }
    .text-ul{
        columns:1;
        margin-top:10px;
        }
        .app_text{
            height:18vh;
        }
        .seo_mark{
            height:60vh;
        }
        .testing-footer{
            height:40vh;
        }
        .testing-footer-ul{
            columns:1;
        }
}

// tablet
@media (max-width: 768px) and (min-width: 490px){

// <-------------app testing service section-------------------------> 

    .testing{
        /* height:100vh; */
    }
    .text-ul{
        columns:2;
        /* margin-top:30px; */
        }
        .app_text{
            font-size:18px;
            /* height:18vh; */
        }
        .seo_mark{
            height:50vh;
        }
        .testing-footer{
            height:30vh;
        }
        .testing-footer-ul{
            columns:1;
        }
}

// laptop
@media (max-width:992px) and (min-width: 768px){

// <-------------app testing service section-------------------------> 

    .testing{
        height:65vh;
    }
    .app_text{
        height:16vh;
        font-size:16px;
    }
    .seo_mark{
        height:40vh;
    }
    .seo-btn{
        width:30vh;
        height:50px;
    }
    .testing-footer{
        height:15vh;
    }
    .testing-footer-ul{
        columns:3;
    }
}
@media (max-width:1200px) and (min-width: 992px){

// <-------------app testing service section-------------------------> 

    .testing{
        height:100vh;
    }
    .app_text{
        height:28vh;
        font-size:22px;
    }
    .seo_mark{
        height:95vh;
    }
    .seo-btn{
        width:50vh;
        height:15vh;
    }
    .testing-footer{
        height:30vh;
    }
    .testing-footer-ul{
        columns:3;
    }
}

@media (max-width:1332px) and (min-width: 1200px){

// <-------------app testing service section-------------------------> 
    .testing{
        height:100vh;
    }
    .app_text{
        height:28vh;
        font-size:22px;
    }
    .seo_mark{
        height:95vh;
    }
    .seo-btn{
        width:50vh;
        height:15vh;
    }
    .testing-footer{
        height:30vh;
    }
    .testing-footer-ul{
        columns:3;
    }
}

`;
export default Testing;
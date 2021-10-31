import { createGlobalStyle } from 'styled-components';

const Services = createGlobalStyle`

/* ----------------------slider section---------------------- */
.slider{
    width: 100%;
    padding: 0;
    height:90vh;
}

.carousel-indicators{
    z-index: 1 !important;
}
.carousel-item{
    height:90vh;
}
@media only screen and ( max-width:980px) {
    .slider{
        width: 100%;
        height: 70vh;
    }
    .carousel-item{
        height: 70vh;
        padding-top:0%;
    }
    .carousel{
        position: inherit;
    }
}

/* ----------------------feature-categories---------------------- */
.feature-categories{
    margin:50px 0 ;
    padding: 20px 0 ;
    transition: 1s ;
    cursor:  pointer ;
}
.feature-categories img:hover{
    transform: scale(1.1);
}
.feature-img{
    width:100%;
    height:40vh;
    margin-bottom: 20px;
}

@media only screen and ( max-width:980px) {
    .feature-categories{
        margin:0 0 30px 0;
        padding: 0px;
    }
    .feature-img{
        height:50vh;
        margin-top: 20px;
    } 
}

`;
export default Services;
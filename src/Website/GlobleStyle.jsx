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

    *{
        margin:0;
        padding:0;
        list-style:none;
        box-sizing:norder-box;
    }

`;
export default GlobleStyle;